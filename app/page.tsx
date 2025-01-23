import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Howitworks from "@/components/Howitworks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="w-full relative bg-white flex justify-center items-center flex-col mx-auto sm:px-0  px-5 rounded-b-full mt-10">
      <div className=" w-full">
        <Navbar/>
        <Hero />
        <Howitworks />
        <About/>
        <Features />
        <Testimonials/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
