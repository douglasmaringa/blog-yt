import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-26",
  useCdn: true,
});

const getAllBlogs = async () => {
  const query = groq`*[_type == "blog"] | order(createdAt desc) {
    title,
    description,
    createdAt,
    paragraphs,
    "image": image.asset->url,
    "slug": slug.current
  }`;

  const blogs = await client.fetch(query);

  return blogs;
};


const getBlogBySlug = async (slug) => {
  // Define the query for fetching a blog by slug
  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    title,
    author,
    "image": image.asset->url,
    paragraphs,
    createdAt
  }`;

  // Fetch data from Sanity
  const blog = await client.fetch(query, { slug });

  return blog;
};

export { getAllBlogs, getBlogBySlug };
