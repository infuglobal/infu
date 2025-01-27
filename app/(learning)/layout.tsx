import LearnerNavbar from "./components/LearnerNavbar";
import LeftNavbar from "./components/LeftNavbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-full overflow-y-hidden">
      <LearnerNavbar />
       <div className="flex h-full">
    <LeftNavbar />

    {children}
  </div>
      </div>
     
  }
  