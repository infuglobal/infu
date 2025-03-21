import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";

const About = dynamic(() => import("./components/About"));
const Features = dynamic(() => import("./components/Features"));
const Footer = dynamic(() => import("./components/Footer"));
const Howitworks = dynamic(() => import("./components/Howitworks"));
const Testimonials = dynamic(() => import("./components/Testimonials"));

const Home = () => {
 
  return (
    <main className="w-full relative bg-white flex justify-center items-center flex-col  mt-10">
        {/* Critical components rendered first */}
        <Navbar />
        <Hero />

        {/* Dynamically imported components */}
        <Howitworks />
        <About />
        <Team />
        <Features />
        <Testimonials />
        <Footer />
    </main>
  );
};

export default Home;
