"use client"
import Image from "next/image"
import Link from 'next/link';

function Header() {
 
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
        <div className="max-w-7xl mx-auto flex justify-between">
         
        <Link href="/">
        <div className="flex items-center cursor-pointer">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="ml-2 text-2xl lg:text-3xl font-bold">Blog</h1>
        </div>
        </Link>

        <div className="flex items-center relative">
           
        </div>

        </div>
    </div>
  )
}

export default Header