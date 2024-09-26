import { HomePage } from "../components/HomePage";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="relative z-10"><Navbar/></div>
      <HomePage/>
    </div> 
  );
}
