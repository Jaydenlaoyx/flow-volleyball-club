import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Training from "@/components/Training";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Training />
    </main>
  );
}