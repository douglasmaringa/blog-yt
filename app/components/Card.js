import Link from 'next/link';
import React from 'react';

function Card({ blog }) {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-xl mx-auto bg-[#FEECEE] rounded-md p-6 shadow-lg">
      <div className="flex space-x-2 mb-4">
        {blog.tags && blog.tags.map((tag) => (
          <div key={tag} className="bg-white rounded-md p-2 text-xs">
            {tag}
          </div>
        ))}
      </div>
      <Link href={`/blog/${blog.slug}`}>
        <h1 className="text-3xl font-bold mb-2 hover:cursor-pointer hover:text-rose-700">
          {blog.title}
        </h1>
      </Link>
      <p className="text-gray-600 mb-4">
        {blog.description}
      </p>
      <div className="text-gray-500 text-sm">
        {formattedDate} 
      </div>
    </div>
  );
}

export default Card;
