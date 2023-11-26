import { PortableText } from '@portabletext/react';
import { getBlogBySlug } from '@/sanity/sanity-utils';
import Header from '@/app/components/Header';
import Image from 'next/image';

export default async function Page({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const components = {
    block: {
        // Default style for handling regular text
       normal: ({ children }) => <p className="text-lg my-8">{children}</p>,
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl my-4">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500 my-4">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700 my-4">{children}</h2>
      ),
    },
  }

  return (
    <div className="h-full pb-20 min-h-screen bg-gradient-to-r from-rose-200 via-rose-200 to-teal-200">
    <Header />

    <div className="max-w-4xl mx-auto flex flex-col mt-10 p-10 md:p-0 space-y-4">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-lg">
            {formattedDate} 
      </p>
    </div>

    <div className='max-w-4xl mx-auto flex flex-col mt-10 p-10 md:p-0'>
      <div className='relative h-96 overflow-hidden aspect-ratio-1'>
      <Image src={blog.image} layout="fill" objectFit="cover" alt="image" />
      </div>
    </div>

    <div className='max-w-4xl mx-auto mt-10 p-10 md:p-0'>
     <PortableText value={blog.paragraphs} components={components}/>
    </div>


  </div>
  );
}

