import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <section className="section">
        <h2>Key Features</h2>
        <div className="features">
          <FeatureCard title="Personalized Learning" description="Get guidance for learning skills based on your goals." />
          <FeatureCard title="Career Focused" description="Learn skills that help you become job-ready." />
          <FeatureCard title="Simple Navigation" description="Move easily between pages using React Router." />
        </div>
      </section>

      <TestimonialSection />
      <CTABanner />
      <Footer />
    </>
  );
}

export default LandingPage;