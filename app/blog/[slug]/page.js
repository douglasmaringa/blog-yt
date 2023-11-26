import { PortableText } from '@portabletext/react';
import { getBlogBySlug } from '@/sanity/sanity-utils';

export default async function Page({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.createdAt}</p>
      <img src={blog.image} alt={blog.title} style={{ maxWidth: '100%' }} />
      <PortableText value={blog.paragraphs} />
    </div>
  );
}

