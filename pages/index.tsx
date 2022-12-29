import Head from "next/head";
import Link from "next/link";
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
    <main className="scroll-smooth bg-[#212121] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 customScrollbar">
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

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex item-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 rounded-full bg-[#252525] text-gray-400 p-2 hover:bg-primary hover:text-black transition-all duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </main>
  );
}
