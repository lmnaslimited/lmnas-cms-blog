import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Landing from '@/components/landing'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { strapiAPI } from '@/lib/api'

export default function Index({ allPosts, preview, categories }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <div className="bg-th-background">

        <Container>
          <Layout preview={preview} categories={categories} >
            <Head>
              <title>LMNAs Blog with {CMS_NAME}</title>
            </Head>
            <Landing/>
            {/** 
            <Intro title='Blog' />
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            */}
          </Layout>
        </Container>

      </div>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  const categories = await strapiAPI("/categories")
  return {
    props: { allPosts, preview, categories },
  }
}
