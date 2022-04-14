import Container from '@/components/container'
import Landing from '@/components/landing'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { strapiAPI } from '@/lib/api'
import FooterBanner from './posts/footer-banner'

export default function Index({ allPosts, preview, categories }) {


  return (
    <>
      <div className="bg-th-background">

        <Container>
          <Layout preview={preview} categories={categories} >
            <Head>
              <title>LMNAs Blog with {CMS_NAME}</title>
            </Head>
           
            <Landing allPosts={allPosts} preview={preview} categories={categories}/>
            {/*morePosts.length > 0 && <MoreStories posts={morePosts} /> */}
            
          </Layout>
        </Container>
        <FooterBanner/>
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
