import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="relative flex-col container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <Experience />
        <EmailSection />
      </div> 
      <Footer />
    </main>
  );
}
