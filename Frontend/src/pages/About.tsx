import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutHero from "../layouts/about/AboutHero";
import AboutPrinciples from "../layouts/about/AboutPrinciples";
import AboutArchitecture from "../layouts/about/AboutArchitecture";
import AboutOpenSource from "../layouts/about/AboutOpenSource";
import AboutCTA from "../layouts/about/AboutCTA";

export default function About() {
  return (
    <>
      <Header />

      <main className="flex flex-col flex-1 w-full relative">
        <AboutHero />
        <AboutPrinciples />
        <AboutArchitecture />
        <AboutOpenSource />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
