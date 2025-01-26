import InvestorsNavbar from "@/components/InvestorNavbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>
      <InvestorsNavbar />
      {children}</div>;
  }
  