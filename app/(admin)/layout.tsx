import Navbar from "./components/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-full overflow-y-hidden">
      <Navbar />
       <div className="flex h-full justify-center">

    {children}
  </div>
      </div>
     
  }
  