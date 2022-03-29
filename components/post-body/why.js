import markdownStyles from '../../components/markdown-styles.module.css'

export default function Why({ why }) {
    return (
        <>
            <section className="text-th-primary-medium body-font">
            </section>
            <section className="text-th-primary-medium body-font">
                <div className="container px-5 py-8 mx-auto bg-th-background-secondary">
                    <h1 className="h-12 py-2 sm:text-3xl text-2xl font-medium title-font text-center bg-th-background">{why.heading}
                    </h1>
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