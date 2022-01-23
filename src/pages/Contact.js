import React from "react";
import Slide from "react-reveal/Slide";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact with Saidmuhammad." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Slide bottom>
        <ContactSection />
        <MapSection />
      </Slide>
    </>
  );
}
