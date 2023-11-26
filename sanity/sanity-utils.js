import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-26",
  useCdn: false,
});

export const getAllBlogs = async () => {
  
  const blogs = await client.fetch(groq`*[_type == "blog"]{
    title,
    description,
    tags,
    createdAt,
    paragraphs,
    "image": image.asset->url,
    "slug": slug.current
  }`,
  {next: {
    revalidateTag: 3600, //revalidate every hour
 }});


  return blogs;
};


export const getBlogBySlug = async (slug) => {
  // Define the query for fetching a blog by slug
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    title,
    author,
    "image": image.asset->url,
    paragraphs,
    createdAt
  }`;

  // Fetch data from Sanity
  const blog = await client.fetch(query,{ slug});

  return blog;
};


