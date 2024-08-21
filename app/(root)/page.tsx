import BlogSection from "./sections/blog-section";
import FeaturedWorkSection from "./sections/featured-work-section";
import HeroSection from "./sections/hero-section";
import TestimonialsSection from "./sections/testimonials-section";
import VentureSection from "./sections/venture-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <TestimonialsSection/>
      <VentureSection />
      <BlogSection />
    </>
  );
}
