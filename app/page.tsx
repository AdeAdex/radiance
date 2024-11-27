import FaithExperience from "./components/home/FaithExperience";
import GetStarted from "./components/home/GetStarted";
import HeroSection from "./components/home/HeroSection";
import Services from "./components/home/services/Services";
import Stats from "./components/home/Stats";

export default function Home() {
  return (
   <main className="py-8 md:py-16">
    <HeroSection/>
    <Stats/>
    <Services/>
    <FaithExperience/>
    <GetStarted/>
   </main>
  );
}
