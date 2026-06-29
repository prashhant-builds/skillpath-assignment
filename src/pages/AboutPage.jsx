import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h1>About SkillPath</h1>
        <p>
          SkillPath is a learning platform that helps students choose the right
          learning path and improve their skills step by step.
        </p>

        <h2>Purpose</h2>
        <p>
          The purpose of SkillPath is to guide learners towards useful skills,
          career growth, and better opportunities.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Reusable React components</li>
          <li>Multi-page navigation</li>
          <li>Responsive layout</li>
          <li>Contact form for user queries</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;