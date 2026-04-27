import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { PressLogos } from "@/components/PressLogos";
import { Process } from "@/components/Process";
import { Promise as PromiseSection } from "@/components/Promise";
import { Properties } from "@/components/Properties";
import { SellCta } from "@/components/SellCta";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <PressLogos />
        <SellCta />
        <Services />
        <Properties />
        <About />
        <Process />
        <PromiseSection />
        <Team />
        <Testimonials />
        <Insights />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
