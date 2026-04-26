import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import ServiceForm from "@/components/site/ServiceForm";
import Activities from "@/components/site/Activities";
import Achievements from "@/components/site/Achievements";
import Gallery from "@/components/site/Gallery";
import VideoMessage from "@/components/site/VideoMessage";
import Testimonials from "@/components/site/Testimonials";
import Vision from "@/components/site/Vision";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceForm />
        <Activities />
        <Achievements />
        <Gallery />
        <VideoMessage />
        <Testimonials />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
