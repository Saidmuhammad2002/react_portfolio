import React from 'react';
import Slide from 'react-reveal/Slide';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';

export default function Contact() {
  return (
    <Slide bottom>
      <ContactSection />
      <MapSection />
    </Slide>
  );
}
