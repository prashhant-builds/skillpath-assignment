import { Link } from "react-router-dom";

function CTABanner() {
  return (
    <section className="cta">
      <h2>Ready to start your learning journey?</h2>
      <Link to="/contact">Contact Us</Link>
    </section>
  );
}

export default CTABanner;