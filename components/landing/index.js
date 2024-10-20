import Intro from "../intro";
import Categories from "./categories";
import HeroPost from "../hero-post";
import PostCard from "./post-card";
import SubscribeCard from "./subscribe-card";
import DownloadCard from "./download-card";
import CasestudyDownload from "@/components/sections/casestudyDownload";


export default function Index({ allPosts, preview, categories, caseStudyData }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)


    return (
        <>
            <section className="body-font">

                {/*<Intro title='LMNAs Insight' /> */}
                {categories && (<Categories categories={categories} />)}

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
                <section className="body-font">
                    <div className="container mx-auto py-12">
                        {/**  <div className="flex flex-wrap -m-4"> */}
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12 mb-20 md:mb-28">

                            <PostCard post={allPosts[1] ? allPosts[1] : heroPost} size='1/3' />


                            <PostCard post={allPosts[2] ? allPosts[2] : heroPost} size='1/3' />
                            <SubscribeCard post={heroPost} size='1/3' />
                            <PostCard post={allPosts[4] ? allPosts[4] : heroPost} size='1/3' />
                            <div className="col-span-2">
                                <PostCard post={allPosts[3] ? allPosts[3] : heroPost} size='1/3' />
                            </div>
                            <div className="col-span-3">
                            {/* <CasestudyDownload isolution={caseStudyData} /> */}
                            {/* <DownloadCard imageSrc={"https://res.cloudinary.com/lmnas/image/upload/v1649901729/download_card_5821x3886_d1e1c9daee.jpg"} size='1/3' /> */}
                            </div>

                        </div>
                    </div>
                </section>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto py-12">
                    <div className="flex flex-wrap -m-4">

                    </div>
                </div>

            </section>
        </>
    )
}
