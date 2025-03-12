import InvestorNavbar from "../components/InvestorNavbar";
import LeftNavbar from "../components/LeftNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" h-screen overflow-y-hidden">
      <InvestorNavbar />
      <div className="flex">
        <LeftNavbar />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        </div>
    </main>
  );
}
