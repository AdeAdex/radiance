import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import Stats from "./components/home/Stats";

export default function Home() {
  return (
   <main className="py-8 md:py-16">
    <HeroSection/>
    <Stats/>
   </main>
  );
}
