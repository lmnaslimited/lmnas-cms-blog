import Categories from "./categories";
import PostCard from "./post-card";
import SubscribeCard from "./subscribe-card";

export default function Index({ allPosts, preview, categories }) {
    const mainPost = allPosts[0]

    return (
        <>
            <section class="text-gray-600 body-font">
                <Categories categories={categories} />
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <PostCard post={allPosts[0]} size='2/3' />
                        <PostCard post={allPosts[1]?allPosts[1]:mainPost} size='1/3' />
                    </div>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 mx-auto py-12">
                        <div class="flex flex-wrap -m-4">
                            <PostCard post={allPosts[2]?allPosts[2]:mainPost} size='1/3' />
                            <PostCard post={allPosts[3]?allPosts[3]:mainPost} size='1/3' />
                            <SubscribeCard post={mainPost} size='1/3' />

                        </div>
                    </div>
                </section>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto py-12">
                    <div class="flex flex-wrap -m-4">
                        <PostCard post={mainPost} size='1/3' />
                        <PostCard post={allPosts[4]?allPosts[4]:mainPost} size='2/3' />
                    </div>
                </div>

            </section>
        </>
    )
}