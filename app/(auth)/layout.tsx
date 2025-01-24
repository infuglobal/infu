import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white min-h-screen flex-col lg:flex-row">
          <section className="w-full lg:w-[40%] flex justify-center items-center">
            <div className="w-full flex flex-col p-10 items-center justify-center shadow-sm rounded-lg">
              
    
         {children}
            </div>
          </section>
    
          {/* Right Section: Image */}
          <div className="hidden lg:block w-[60%]">
            <Image
              src="/i5.jpg"
              alt="login image"
              height={1000}
              width={1000}
              className="object-cover w-full h-full rounded-sm shadow-lg"
            />
          </div>
        </div>
  );
}