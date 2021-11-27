//Strapi Blog style api request
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export async function strapiAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
//End Strapi Blog style api request. Need to revisit and use graphql api later
async function tempfetchAPI(query, { variables } = {}) {
  const test_url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`
  const response = await fetch(test_url)
  const test_data = await response.json()
  return test_data
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
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  
  return data?.posts[0]
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

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data?.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )
  return data
}
