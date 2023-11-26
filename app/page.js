import { getAllBlogs } from "@/sanity/sanity-utils";
import Header from "./components/Header";
import Card from "./components/Card";


export default async function Page() {
  const blogs = await getAllBlogs();

  return (
    <div className="h-full min-h-screen bg-gradient-to-r from-rose-200 via-rose-200 to-teal-200">
      <Header />

      <div className="max-w-xl mx-auto flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold text-center">Coding Blog</h1>
        <p className="text-center text-xl">
        Embark on a coding journey with us, your go-to destination for all things programming and development. 🎨✨
        </p>
      </div>

      <div className='flex p-10'>
      <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16'>
        {
          blogs.map((blog) => (
            <Card key={blog.slug.current} blog={blog} />
          ))
        }
      </div>
      </div>


    </div>
  );
}
