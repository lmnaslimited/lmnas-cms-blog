import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { strapiAPI } from '@/lib/api'
import FooterBanner from '../../components/footer-banner'
import { getCategorybySlug,getPostBySlug } from '@/lib/api' // Update imports


const Category = ({ category, preview, categories,  posts }) => {
  const heroPost = posts[0]
  const morePosts = category.posts.slice(1).map((post) => (
    {
      slug: post.slug,
      title: post.title,
      coverImage: post.coverImage,
      date: post.date,
      author: post.author,
      excerpt: post.excerpt
    }
  ))


  const author = { name: heroPost.author.name, picture: heroPost.author.picture }
  return (
    <>
      <Container>
        <Layout preview={preview} categories={categories}>
          <Head>
            <title>LMNAs Blog | Category {category.name}</title>
          </Head>
          <Intro title={category.name} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Layout>
      </Container>
      <FooterBanner />
    </>
  )
}

export async function getStaticPaths() {
  const categories = await strapiAPI("/api/categories")

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
 
  
  // Fetch data using appropriate API calls
  const category = (await getCategorybySlug(params.slug))[0] 
  const categories = await strapiAPI("/api/categories")
  // const authors = await getCategorybySlug() 
  const posts = await getPostBySlug(category.posts[0].slug)


  return {
    props: { category, categories,posts },
    revalidate: 1,
  }
}

export default Category
