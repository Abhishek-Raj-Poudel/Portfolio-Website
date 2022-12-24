import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    // this snaps on the y axis, its manditory and scroll is set to on with overflow-scroll
    <div className="bg-[#111111] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Abhishek Raj Poudel</title>
      </Head>

      <Header />

      {/* Hero */}
      {/* section is seo friendly */}
      {/* this is also allow use to have snap scroll effect. */}
      {/* snap center makes you snap to content when you scroll and on the center of your screen. */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
