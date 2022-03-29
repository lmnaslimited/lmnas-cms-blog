import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body/post-body'
import MoreStories from '@/components/more-stories'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import { strapiAPI } from '@/lib/api'

export default function Post({ post, morePosts, preview, categories }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <Layout preview={preview} categories={categories}>

        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                heroCta={post.herocta}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}

      </Layout>
    </Container>
  )
}

export async function getStaticProps({ params, preview = null }) {

  const data = await getPostAndMorePosts(params.slug, preview)
  const content = data?.posts[0]?.content || ''
  const content_html = await Promise.all(content.map(async (fragment) => {
    switch (fragment.__typename) {
      case 'ComponentBodySection':
        fragment.html_content = await markdownToHtml(fragment.content)
        return fragment
      case 'ComponentCtaButton':
        fragment.html_content = await markdownToHtml(fragment.content)
        return fragment
    }
  }))
  console.log(content_html)
  //const content = await markdownToHtml(data?.posts[0]?.content || '')

  const categories = await strapiAPI("/categories")
  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
      categories
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  // Get the paths we want to pre-render based on posts
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }))
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    paths,
    fallback: false,
  }
}
