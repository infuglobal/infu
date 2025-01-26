import BusinessNavbar from "@/components/BusinessNavbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>
      <BusinessNavbar />
      {children}</div>;
  }
  