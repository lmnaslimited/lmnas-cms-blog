import { getPreviewPostBySlug, strapiAPI} from '../../lib/api'; 
export default async function handler(
  req,
  res 
) {
  if (req.query.Authorization !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // -> posts
    const slugsData = await getPreviewPostBySlug(); 
    const slugs = slugsData.map(post => post.slug);

    for (const slug of slugs) {
      await res.revalidate(`/posts/${slug}`);
    }
    // -> category
    const categoriesData = await strapiAPI("/api/categories"); 
    const categories = categoriesData.map(categorie => categorie.slug);

    for (const categorie of categories) {
      await res.revalidate(`/category/${categorie}`);
    }

    await res.revalidate('/blog');  

    
    res.writeHead(307, { Location: '/blog' });
    res.end();
    

  } catch (err) {
    console.error('Error during revalidation:', err);
    return res.status(500).send('Error revalidating');
  }
}


