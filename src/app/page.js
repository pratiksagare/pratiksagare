import Navbar from "./components/Navbar";
import About from "./pages/About";
import HeroSection from "./pages/HeroSection";
import NextPage from "./pages/NextPage";

export default function Home() {
  return (
    <div className="h-full  max-w-[1200px] mx-auto  border-red-500">
      <Navbar />
      <HeroSection/>
      <About/>
      <NextPage/>
    </div>
  );
}
