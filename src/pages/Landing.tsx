import GallerySection from "../components/Gallery";
import AboutSection from "../sections/About";
import ContactSection from "../sections/Contact";
import HomeSection from "../sections/Home";
import ScheduleSection from "../sections/Schedule";
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
