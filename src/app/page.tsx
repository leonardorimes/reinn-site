import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import LiveDemo from "@/components/LiveDemo/LiveDemo";
import Outcomes from "@/components/Outcomes/Outcomes";
import Impact from "@/components/Impact/Impact";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Process />
        <LiveDemo />
        <Outcomes />
        <Impact />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
