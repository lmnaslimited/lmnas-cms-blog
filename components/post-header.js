import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, heroCta }) {
  console.log('HeroCta from post header', heroCta.subtitle.subTitle)
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-th-primary-dark">{title}</h1>

            <Avatar className="mt-8" name={author.name} picture={author.picture} />
            <p className="text-sm mt-8 text-th-primary-light mb-4 w-3/5">{heroCta.subtitle.subTitle}</p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <button className="inline-flex text-white bg-th-accent-light border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{heroCta.heading}</button>
            </div>


          </div>
          <div className="lg:max-w-lg lg:w-full md:w-2/5 w-5/6">
            <CoverImage title={title} url={coverImage.url} />
          </div>
        </div>
      </section>
      <div className="max-w-2xl mx-auto mt-8">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg text-th-accent-medium">
          <Date dateString={date} />
        </div>
      </div>
      {/**  Commented the standard blog layout
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg text-th-accent-medium">
          <Date dateString={date} />
        </div>
      </div>
      */}


    </>
  )
}