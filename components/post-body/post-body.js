//import markdownStyles from './markdown-styles.module.css'
import markdownStyles from '../../components/markdown-styles.module.css'
import CtaLink from './cta-link'
import Why from './why'
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      {content.map((fragment => {
        switch (fragment.__typename) {
          case "ComponentBodySection":
            if (fragment.type == 'why') {
              return (
                <Why why={fragment}/>
              )
            } else {
              return (


                <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: fragment.html_content }} />)
            }


          case "ComponentCtaButton":
            return (
              <CtaLink ctaLink={fragment} />
            )
        }
      }))}

    </div>
  )
}
