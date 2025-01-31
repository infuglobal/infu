import BusinessNavbar from "./components/BusinessNavbar";
import LeftNavbar from "./components/LeftNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen overflow-y-hidden">
      <BusinessNavbar />
      <div className="flex">
        <LeftNavbar />
        {children}
        </div>
    </div>
  );
}
