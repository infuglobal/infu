import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Features = dynamic(() => import("@/components/Features"));
const Footer = dynamic(() => import("@/components/Footer"));
const Howitworks = dynamic(() => import("@/components/Howitworks"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

const Home = () => {
  return (
    <main className="w-full relative bg-white flex justify-center items-center flex-col mx-auto sm:px-0 px-5 mt-10">
      <div className="max-w-7xl w-full">
        {/* Critical components rendered first */}
        <Navbar />
        <Hero />

        {/* Dynamically imported components */}
        <Howitworks />
        <About />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
