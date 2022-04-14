import markdownStyles from '../../components/markdown-styles.module.css'

export default function Why({ why }) {
    return (
        <>
            <section className="text-th-primary-medium body-font">

                <div className="container flex flex-wrap px-5 py-8 mx-auto bg-th-background-secondary">
                    <div class="container px-5 py-4 mx-auto bg-th-background">
                        <div class="flex flex-wrap w-full flex-col items-center text-center">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{why.sectionTitle.title}</h1>

                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 flex">
                            <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: why.html_content }} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}