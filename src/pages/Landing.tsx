import React from "react";
import HomeSection from "../sections/Home";
import ContactSection from "../sections/Contact";
import AboutSection from "../sections/About";
import ScheduleSection from "../sections/Schedule";
import GallerySection from "../components/Gallery";
import SponsorsSection from "../sections/Sponsors";

export default function Landing() {
  return (
    <>
      <HomeSection />

      <AboutSection />

      <ScheduleSection />

      <GallerySection />

      <SponsorsSection />

      <ContactSection />
    </>
  );
}
