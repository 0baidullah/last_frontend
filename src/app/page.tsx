import Hero from "@/app/components/Hero_Section";
import Banner from "@/app/components/Banner";
import Vision_Section from "@/app/components/Visoion_Section";
import Plane from "@/app/components/Plane";
import Contact from "./components/Contact";
import Banner2 from "./components/homebanner"
import Gifts from "./components/Gifts";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Vision_Section />
      {/* <PopularServices /> */}
      <Plane />
      <Gifts />
      <Banner2 />
      <Contact />
    </>
  );
}
