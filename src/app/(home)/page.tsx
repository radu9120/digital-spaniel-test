import { Hero } from "./components/hero";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { CaseStudies } from "./components/case-studies";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <CaseStudies />
      {/* <About />
      <Testimonials /> */}
      <Footer />
    </>
  );
}
