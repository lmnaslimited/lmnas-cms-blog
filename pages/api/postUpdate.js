import { strapiAPI } from '../../lib/api'; 

export default async function handler(req, res) {
  // Check for the secret token
  if (req.query.secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Validate if the slug is provided in the request
  if (!req.query.slug) {
    return res.status(400).json({ message: 'No valid slug provided' });
  }

  try {
    // Revalidate the specific post by slug
    console.log(`Revalidating /posts/${req.query.slug}`);
    await res.revalidate(`/posts/${req.query.slug}`);

    // Revalidate the categories
    const categoriesData = await strapiAPI("/api/categories");
    const categories = categoriesData.map(categorie => categorie.slug);

    for (const categorie of categories) {
      console.log(`Revalidating /category/${categorie}`);
      await res.revalidate(`/category/${categorie}`);
    }

    // Revalidate the index page
    console.log('Revalidating / (index page)');
    await res.revalidate('/');

    // Redirect after successful revalidation
    res.writeHead(307, { Location: '/blog' });
    res.end();
    
  } catch (err) {
    console.error('Error during revalidation:', err);
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
