"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/About_hero_section";
import Contact from "../components/Contact";
import About_W from "../components/About_What";
import Story from "../components/story";
import Feedback from "../components/comments";
import Channel from "../components/channel";
import SocaiCard from "../components/Socialcard";

const About = () => {
  return (
    <>
      <Header />
      <Hero />
      <About_W />
      <Story />
      <Feedback />
      <Channel />
      <SocaiCard />
      <Contact />
    </>
  );
};
export default About;
