
export default function Intro({title}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}.
      </h1>
      
    </section>
  )
}
