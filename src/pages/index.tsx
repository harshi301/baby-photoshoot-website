import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baby Photoshoot</title>
        <meta
          name="description"
          content="Beautiful and timeless baby photoshoots for your little one."
        />
        <meta
          name="keywords"
          content="baby photoshoot, newborn photography, family sessions, milestone sessions"
        />
        <link rel="canonical" href="https://www.example.com/" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
