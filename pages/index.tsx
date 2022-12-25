import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    // this snaps on the y axis, its manditory and scroll is set to on with overflow-scroll
    <div className="scroll-smooth bg-[#111111] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Abhishek Raj Poudel</title>
      </Head>

      <Header />

      {/* Hero */}
      {/* section is seo friendly */}
      {/* this is also allow use to have snap scroll effect. */}
      {/* snap center makes you snap to content when you scroll and on the center of your screen. */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
