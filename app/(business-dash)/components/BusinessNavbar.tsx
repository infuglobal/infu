// app/components/BusinessNavbar.js (Server Component)
import Image from "next/image";
import ClientNavbar from "./ClientNavbar";
import Link from "next/link";



const BusinessNavbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href='/'>

            <Image
              src="/infu-logo.png"
              alt="Infinity Fund Logo"
              width={60}
              height={60}
              className="mr-0"
            />
                        </Link>

            <div className="text-2xl font-bold bg-gradient-to-r from-[#1E1E2E] to-[#312E81] text-transparent bg-clip-text">
              Business Dashboard
            </div>
          </div>

          {/* Client Component for Interactive Parts */}
          <ClientNavbar/>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;