import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-3 relative space-y-3">
      <DotPattern className="absolute inset-0 z-[-1]" width={60} height={60} cx={3} cy={3} cr={3} />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
