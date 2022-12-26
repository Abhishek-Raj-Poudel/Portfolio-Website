import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    // this snaps on the y axis, its manditory and scroll is set to on with overflow-scroll
    <div className="scroll-smooth bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Abhishek Raj Poudel</title>
      </Head>

      <Header />

      {/* section is seo friendly */}
      {/* this is also allow use to have snap scroll effect. */}
      {/* snap center makes you snap to content when you scroll and on the center of your screen. */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
