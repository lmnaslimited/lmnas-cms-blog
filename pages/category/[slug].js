import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { strapiAPI } from '@/lib/api'


//import Seo from "../../components/seo"


const Category = ({ category, preview, categories, authors }) => {
  //Implement this later
  /* const seo = {
     metaTitle: category.name,
     metaDescription: `All ${category.name} articles`,
      <Seo seo={seo} />
   } */
  const heroPost = category.posts[0]
  const morePosts = category.posts.slice(1).map((post) => (

    {
      slug: post.slug,
      title: post.title,
      coverImage: post.coverImage,
      date: post.date,
      author: authors.find(c => c.name = post.author),
      excerpt: post.excerpt
    }
  ))
  const author = { name: heroPost.author, picture: authors[0].picture }
  return (

    <Container>
      <>
        <Layout preview={preview} categories={categories} >

          <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
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
      </>
    </Container>


  )
}

export async function getStaticPaths() {
  const categories = await strapiAPI("/categories")


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
  const category = (await strapiAPI(`/categories?slug=${params.slug}`))[0]
  const categories = await strapiAPI("/categories")
  const authors = await strapiAPI("/authors")

  return {
    props: { category, categories, authors },
    revalidate: 1,
  }
}

export default Category
