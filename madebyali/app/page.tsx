import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import Solutions       from "@/components/Solutions";
import Benefits        from "@/components/Benefits";
import Experience      from "@/components/Experience";
import Stats           from "@/components/Stats";
import Certifications  from "@/components/Certifications";
import Testimonials    from "@/components/Testimonials";
import CTA             from "@/components/CTA";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <Benefits />
      <Experience />
      <Stats />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
