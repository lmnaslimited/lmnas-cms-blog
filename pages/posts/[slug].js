import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '@/components/container';
import PostBody from '@/components/post-body/post-body';
import MoreStories from '@/components/more-stories';
import Header from '@/components/header';
import PostHeader from '@/components/post-header';
import SectionSeparator from '@/components/section-separator';
import Layout from '@/components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import PostTitle from '@/components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import { strapiAPI } from '@/lib/api';
import FooterBanner from '../../components/footer-banner';
import { getHomePageData } from '../api/homePageData';

export default function Post({ post, morePosts, homePageData }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <main className="bg-th-backgroundPrimary">
        <div className="absolute inset-0 bg-[url(/blog/product-heroBG.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">
          <Layout ilayoutData={homePageData[0].layoutData}>
            <Container>
              <Header />
              {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
              ) : (
                <>
                  <article>
                    <Head>
                      <title>
                        {post.title} | {post.category.name} Blog of LMNAs
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
            </Container>
          </Layout>
        </div>
      </main>
      <FooterBanner />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
  const content = data?.posts[0]?.content || '';
  const homePageData = await getHomePageData('en');

  // Transform content to HTML if needed
  const content_html = await Promise.all(
    content.map(async (fragment) => {
      switch (fragment.__typename) {
        case 'ComponentBodySection':
          fragment.html_content = await markdownToHtml(fragment.content);
          return fragment;
        case 'ComponentCtaButton':
          fragment.html_content = await markdownToHtml(fragment.content);
          return fragment;
        default:
          return fragment;
      }
    })
  );

  const categories = await strapiAPI('/api/categories');

  const post = {
    ...data?.posts[0],
    content: content_html,
    excerpt: data?.posts[0]?.excerpt || '',
  };

  return {
    props: {
      post,
      morePosts: data?.morePosts || [],
      categories,
      homePageData,
    },
    revalidate: false, 
  };
}


export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,  
    fallback: 'blocking', 
  };
}

