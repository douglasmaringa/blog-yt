import { getAllBlogs } from "@/sanity/sanity-utils"
import Link from "next/link"

export default async function page() {

  const blogs = await getAllBlogs()

  return (
    <div>
      {JSON.stringify(blogs)}
      {
        blogs?.map((blog) => {
          return (
            <Link href={`/blog/${blog.slug}`}>
            <div>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
              <p>{blog.createdAt}</p>
              <img src={blog.image} />
              <p>{blog.slug}</p>
            </div>
            </Link>
          )
        })
      }
    </div>
  )
}
