import BusinessNavbar from "@/app/(business-dash)/components/BusinessNavbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>
      <BusinessNavbar />
      {children}</div>;
  }
  