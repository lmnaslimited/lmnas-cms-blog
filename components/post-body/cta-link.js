import Link from 'next/link'
export default function CtaLink({ ctaLink }) {
    return (
        <>
            <section className="text-th-accent-medium body-font">
                <div className="container py-6 mx-auto">
                <div className="flex flex-row sm:items-center items-start mx-auto">
            <Link
                href={`${ctaLink.target}`}
                className="text-th-primary hover:underline flex-grow sm:pr-16 text-2xl font-bold title-font text-th-accent-medium"
            >
                {ctaLink.title.title} : 
                <span className="hover:underline flex-grow sm:pr-16 text-xl font-light title-font text-th-accent-medium">
                {ctaLink.title.subTitle}
                </span>
            </Link>
</div>

                </div>
            </section>
        </>
    )
}