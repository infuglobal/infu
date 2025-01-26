import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white min-h-screen h-screen overflow-hidden flex-col lg:flex-row">
      {/* Left Section: Form */}
      <section className="w-full lg:w-[35%] flex justify-center items-center bg-gray-50">
        <div className="w-full h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </section>

      {/* Right Section: Image */}
      <div className="hidden lg:block w-[65%]">
        <Image
          src="/i7.jpg"
          alt="login image"
          height={1000}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}