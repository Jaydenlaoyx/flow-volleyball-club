import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Navbar from "@/components/Navbar";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Training />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}