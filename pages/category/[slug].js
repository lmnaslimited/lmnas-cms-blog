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
import { getHomePageData } from "../api/homePageData"



const Category = ({ category, homePageData,  posts }) => {
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

<main className="bg-th-backgroundPrimary">
      <div className="absolute inset-0 bg-[url(/blog/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        
      <Layout ilayoutData={homePageData[0].layoutData}>
      <Container>
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
      </Container>
      </Layout>
    </div>
    </main>
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
  const homePageData = await getHomePageData("en");

  return {
    props: { category, categories,posts,homePageData },
    revalidate: false,
  }
}

export default Category
