import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HomeHero from "../layouts/home/HomeHero";
import HomeFeatures from "../layouts/home/HomeFeatures";
import HomeStack from "../layouts/home/HomeStack";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col flex-1 w-full relative">
        <HomeHero />
        <HomeFeatures />
        <HomeStack />
      </main>

      <Footer />
    </>
  );
}
