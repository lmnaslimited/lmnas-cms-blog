import Container from '@/components/container'
import Landing from '@/components/landing'
import Layout from '@/components/layout'
import { getAllPostsForHome,getPreviewPostBySlug,getCaseStudies } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { strapiAPI } from '@/lib/api'
import FooterBanner from '../components/footer-banner'
import { getHomePageData } from "./api/homePageData";

export default function Index({ allPosts, preview, categories, homePageData,caseStudyData }) {

  return (
    // <>
    //   <div className="bg-th-background">

    //     <Container>
    //       <Layout preview={preview} categories={categories} >
            // <Head>
            //   <title>LMNAs Blog | Business & Technology</title>
            // </Head>
           
            // <Landing allPosts={allPosts} preview={preview} categories={categories}/>
            // {/*morePosts.length > 0 && <MoreStories posts={morePosts} /> */}
            
    //       </Layout>
    //     </Container>
    //     <FooterBanner/>
    //   </div>
    // </>

    <main className="bg-th-backgroundPrimary">
      <div className="absolute inset-0 bg-[url(/blog/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        
    <Layout ilayoutData={homePageData[0].layoutData}>
    <Head>
              <title>LMNAs Blog | Business & Technology</title>
            </Head>
           <Container>
            <Landing allPosts={allPosts} preview={preview} categories={categories} caseStudyData={caseStudyData} />
            {/*morePosts.length > 0 && <MoreStories posts={morePosts} /> */}
            </Container>
    </Layout>
    </div>
    </main>
  )
}

export async function getStaticProps({ preview = null,locale }) {

  const allPosts = (await getAllPostsForHome(preview)) || []
  const categories = await strapiAPI("/api/categories")
  const homePageData = await getHomePageData("en");
  const caseStudyData= await getCaseStudies();
  return {
    props: { allPosts, preview, categories , homePageData, caseStudyData},
    revalidate: false,
  }
}

