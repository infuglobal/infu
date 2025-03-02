import BusinessNavbar from "./components/BusinessNavbar";
import LeftNavbar from "./components/LeftNavbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-y-hidden">
      {/* BusinessNavbar is always visible */}
      <BusinessNavbar />

      {/* Main content area with LeftNavbar and children */}
      <div className="flex">
        {/* LeftNavbar is always visible */}
        <LeftNavbar />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}