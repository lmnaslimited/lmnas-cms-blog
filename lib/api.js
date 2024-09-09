//Strapi Blog style api request
export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`
}

function transformV4toV3REST(response) {
  // console.log(response)
  return response.map(item => ({
    id: item.id,
    ...item.attributes // Extracting the first item in the attributes array
  }));
}

// Helper to make GET requests to Strapi
export async function strapiAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  const transformed_data=transformV4toV3REST(data.data)
  return transformed_data
}
//End Strapi Blog style api request. Need to revisit and use graphql api later
function transformV4toV3REST2(response) {
  return response.map(item => ({
    id: item.id,
    ...item.attributes // Flattening the attributes object into the main object
  }));
}

async function tempfetchAPI(query, { variables } = {}) {
  const test_url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`
  const response = await fetch(test_url)
  const test_data = await response.json()
  const transformed_test_data=transformV4toV3REST2(test_data.data)
  return transformed_test_data
}
async function fetchAPI(query, { variables } = {}) {

  const cms_url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`
  const res = await fetch(cms_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    console.log(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}



function transformV4toV3Query1(response) {
  return {
    posts: response.posts.data.map(post => ({
      slug: post.attributes.slug
    }))
  };
}




export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `

 query Posts($filters: PostFiltersInput) {
  posts(filters: $filters, sort: "date:desc",pagination:{limit:10}) {
    data {
      attributes {
        
        slug   
   }
  }
 }
} 
  `,
    {
      variables: {
        "filters": {
          "slug": {
            "eq": slug
          }
        }
      },
    }
  )
  const transformed_data= transformV4toV3Query1(data)
  return transformed_data?.posts[0]
}

export async function getAllPostsWithSlug() {
  /*  const data = fetchAPI(`
      {
        posts {
          slug
        }
      }
    `) */
  // Temp fix. Get all post by a temp api. should be replaced with proper one
  const data = await tempfetchAPI()
  return data
}



function transformV4toV3Query2(response) {
  return {
    posts: response.posts.data.map(post => ({
      title: post.attributes.title,
      slug: post.attributes.slug,
      excerpt: post.attributes.excerpt,
      category: post.attributes.category ? post.attributes.category.data.attributes.name : null,
      date: post.attributes.date,
      coverImage: post.attributes.coverImage ? { url: post.attributes.coverImage.data.attributes.url } : null,
      author: post.attributes.author ? {
        name: post.attributes.author.data.attributes.name,
        picture: post.attributes.author.data.attributes.picture ? { url: post.attributes.author.data.attributes.picture.data.attributes.url } : null
      } : null
    }))
  };
}



export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
query Posts($filters: PostFiltersInput) {
  posts(filters: $filters, sort: "date:desc",pagination:{limit:10}) {
    data {
      attributes {
        title
        slug
        excerpt
        category{
          data{
            attributes{
              name
            }
          }
        }
        date
        coverImage{
          data{
            attributes{
              url
            }
          }
        }
        author{
          data{
            attributes{
              name
              picture{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }       
    }
  }
}
  `,
    {
      variables: {
        "filters": {
          ...(preview ? {} : {  "status": {"eq": "published"} }),
        },
      },
    }
  )
  const transformed_data=transformV4toV3Query2(data)
  return transformed_data?.posts
}

export async function getPostBySlug(slug) {

  const data = await fetchAPI(
    `
query Posts($filters: PostFiltersInput) {
  posts(filters: $filters, sort: "date:desc",pagination:{limit:10}) {
    data {
      attributes {
        title
        slug
        excerpt
        category{
          data{
            attributes{
              name
            }
          }
        }
        date
        coverImage{
          data{
            attributes{
              url
            }
          }
        }
        author{
          data{
            attributes{
              name
              picture{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }       
    }
  }
}
  `,
    {
      variables: {
        "filters": {
          ...(slug ? {"slug": {"eq": slug}} : {   }),
        },
      },
    }
  )
  const transformed_data=transformV4toV3Query2(data)
  return transformed_data?.posts
}


function transformV4toV3Query3(response) {
  function transformPost(post) {
    const attributes = post.attributes;

    return {
      title: attributes.title,
      slug: attributes.slug,
      excerpt: attributes.excerpt,
      category: attributes.category ? attributes.category.data.attributes.name : null,
      date: attributes.date,
      ogImage: attributes.ogImage && attributes.ogImage.data ? { url: attributes.ogImage.data.attributes.url } : null,
      herocta: attributes.herocta ? {
        target: attributes.herocta.target,
        type: attributes.herocta.type,
        title: attributes.herocta.title ? {
          title: attributes.herocta.title.title,
          subTitle: attributes.herocta.title.subTitle
        } : null
      } : null,
      meta: attributes.meta ? attributes.meta.map(m => ({
        id: m.id,
        name: m.name,
        content: m.content
      })) : [],
      content: attributes.content ? attributes.content.map(c => {
        if (c.__typename === 'ComponentBodySection') {
          return {
            sectionId: c.sectionId,
            type: c.type,
            sectionTitle: c.sectionTitle ? {
              title: c.sectionTitle.title,
              subTitle: c.sectionTitle.subTitle
            } : null,
            content: c.content,
            sectionImage: c.sectionImage && c.sectionImage.data && c.sectionImage.data.attributes ? { url: c.sectionImage.data.attributes.url } : null
          };
        }
        if (c.__typename === 'ComponentCtaButton') {
          return {
            id: c.id,
            title: c.title ? {
              title: c.title.title,
              subTitle: c.title.subTitle
            } : null,
            ctaType: c.ctaType,
            target: c.target
          };
        }
        return null;
      }) : [],
      coverImage: attributes.coverImage && attributes.coverImage.data ? { url: attributes.coverImage.data.attributes.url } : null,
      author: attributes.author ? {
        name: attributes.author.data.attributes.name,
        picture: attributes.author.data.attributes.picture ? { url: attributes.author.data.attributes.picture.data.attributes.url } : null
      } : null
    };
  }

  return {
    posts: response.posts.data.map(transformPost),
    morePosts: response.morePosts ? response.morePosts.data.map(transformPost) : []
  };
}



export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
     # refer https://graphql.org/learn/queries/#inline-fragments
      # refer union issues on https://github.com/strapi/strapi/issues/4849
      # dynamic zone fragment querying
      # In the fragment you cannot have conflicting names for eg: field 'type' in
      # one section should be retrieves as aliases in another fragment

 query Posts($filters: PostFiltersInput,$filters_ne: PostFiltersInput) {
  posts(filters: $filters, sort: "date:desc",pagination:{limit:10}) {
    data {
      attributes {
        title
        slug
        category{
          data{
            attributes{
              name
            }
          }
        }
        date
        ogImage : coverImage{
          data{
            attributes{
              url
            }
          }
        }
        herocta{
          target
          type
          title{
            title
            subTitle
          }
        }
        meta{
          id
          name
          content
        }
        content{
          __typename 
          ...on ComponentBodySection {
            sectionId : id
            type
            sectionTitle : title {
              title
              subTitle
            }
            content
            sectionImage :image{
              data
              {
                attributes{
                  url
                }
              }
            }
          }
            
            ...on ComponentCtaButton {
              id
              title{
                title
                subTitle
              }
              ctaType : type
              target
            }             
          }
        coverImage{
          data{
            attributes{
              url
              formats
            }
          }
        }
        author{
          data{
            attributes{
              name
              picture{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }       
    }
  }
  morePosts:   posts(filters: $filters_ne, sort: "date:desc",pagination:{limit:5}) {
    data{
      attributes{
        title
        slug
        excerpt
        date
        coverImage{
          data{
            attributes{
              url
            }
          }
        }
        author{
          data{
            attributes{
              name
              picture{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 `,
    {
      preview,
      variables: {
       "filters": {
        "slug": { "eq": slug},
          ...(preview ? {} : {"status": {"eq": "published"} }),
        },
        "filters_ne": {
         "slug":{"ne": slug},
          ...(preview ? {} : { "status": {"eq": "published"} }),
        },
      },
    }
  )
  const transformed_data=transformV4toV3Query3(data)
  return transformed_data
}



function transformV4toV3Category(response) {
  return response.categories.data.map(category => ({
    id: category.id,
    name: category.attributes.name,
    posts: category.attributes.posts.data.map(post => ({
      id: post.id,
      ...post.attributes
    }))
  }));
}



export async function getCategorybySlug(slug=null) {
 
  const data = await fetchAPI(
    `

    query categories($filters: CategoryFiltersInput) {
      categories(filters: $filters) {
        data {
          id
          attributes {
            name
            slug
            posts{
              data{
                id
                attributes{
                  date
                  slug
                  title
                  
                }
              }
            }
          }
        }
      }
    }
    
  `,
    {
      
       variables : slug ? {
        "filters": {
          "slug": {
            "eq": slug
          }
        }
      } : {}
    }
  )
  const transformed_data= transformV4toV3Category(data)
  return transformed_data
}