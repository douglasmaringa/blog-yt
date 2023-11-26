import Image from "next/image"
import Link from 'next/link';

function Header() {
  return (
    <div className="p-10">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <h1 className="ml-2 text-2xl lg:text-3xl">Coding Blog</h1>
          </div>
        </Link>

        <div className="flex items-center relative">
          {/* Add your additional header content here */}
        </div>
      </div>
    </div>
  );
}

export default Header;
