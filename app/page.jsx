import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/ui/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
