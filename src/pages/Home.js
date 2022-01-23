import React from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactBanner from "../components/ContactBanner";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Who is Saidmuhammad" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Bounce left>
        <HeroSection />
      </Bounce>
      <Bounce right>
        <AboutSection />
      </Bounce>
      <Fade left>
        <ServiceSection />
      </Fade>
      <ProjectSection />
      <Bounce>
        <TestimonialsSection />
      </Bounce>
      <Zoom>
        <ContactBanner />
      </Zoom>
    </>
  );
}
