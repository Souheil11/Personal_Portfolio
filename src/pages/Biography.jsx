import "../styles/Biography.css";
import profilePhoto from "../assets/Souhaiel_profile_photo.png";
import photoAtKic from "../assets/photo_at_kic.jpg";
import photoPresenting from "../assets/photo_presenting_trashtracker.jpg";
import photoatEXPO from "../assets/photo_at_EXPO2025.png";
import photoLufthansa from "../assets/Working_Lufthansa.jpg";
import photoRunning from "../assets/Souhaiel_running.jpg";

export default function Biography() {
  return (
    <div className="bio-container fade-in">
      <h1 className="bio-header fade-in-up">My Journey</h1>

      <div className="bio-content">
        <section className="bio-section intro-section fade-in-up delay-1">
          <div className="bio-text">
            <p>
              Hello, I’m <strong className="highlight-text">Souhaiel Karbaa</strong> — an adaptable IT
              enthusiast with a passion for creating technology that connects
              people and improves their daily lives. My journey started far from
              where I am today, and it’s been an exciting path shaped by
              curiosity, travel, and constant learning.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image profile-circle" src={profilePhoto} alt="Souhaiel Karbaa" />
          </div>
        </section>

        <section className="bio-section reverse fade-in-up delay-2">
          <div className="bio-text">
            <h2>The Lufthansa Years</h2>
            <p>
              I began my professional life in Tunisia, where I worked for the{" "}
              <strong className="highlight-text">Lufthansa Group</strong>. For over a decade, I grew through
              multiple roles — from customer service to station supervision and duty management.
              Those years taught me leadership and problem-solving under pressure.
            </p>
            <p>
              I also found myself drawn to the technical side of operations — managing data backups,
              troubleshooting with IBM services, and contributing to an AI chatbot project using IBM Watson.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image rounded-rect" src={photoLufthansa} alt="Working at Lufthansa" />
          </div>
        </section>

        <section className="bio-section fade-in-up delay-3">
          <div className="bio-text">
            <h2>A Leap into Tech</h2>
            <p>
              My growing interest in technology inspired a bold shift. I moved to Japan to pursue a{" "}
              <strong className="highlight-text">Master’s degree in Computer Science</strong> at the{" "}
              <strong className="highlight-text">Kobe Institute of Computing</strong>.
            </p>
            <p>
              During that time, I built several hands-on projects and deepened my understanding of
              full-stack development using ReactJS, Laravel, Python, and C++.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image rounded-rect" src={photoAtKic} alt="Kobe Institute of Computing" />
          </div>
        </section>

        <section className="bio-section reverse fade-in-up delay-4">
          <div className="bio-text">
            <h2>TrashTracker & Social Impact</h2>
            <p>
              My thesis project, the <strong className="highlight-text">TrashTracker App</strong>, reflects
              both my technical and social values. It’s a community-driven platform designed to
              encourage environmental awareness through gamification.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image rounded-rect" src={photoPresenting} alt="Presenting TrashTracker" />
          </div>
        </section>

        <section className="bio-section fade-in-up delay-5">
          <div className="bio-text">
            <h2>Expo 2025 & Beyond</h2>
            <p>
              After graduation, I joined <strong className="highlight-text">Crosswire Ltd.</strong> in Osaka,
              contributing to the infrastructure setup for <strong className="highlight-text">Expo 2025</strong>.
              I worked on complex network systems across international pavilions.
            </p>
            <p>
              Beyond technology, I’m multilingual — fluent in English, French, and Arabic,
              with working proficiency in German and Japanese.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image rounded-rect" src={photoatEXPO} alt="Expo 2025" />
          </div>
        </section>

        <section className="bio-section reverse fade-in-up delay-6">
          <div className="bio-text">
            <h2>Life Outside Work</h2>
            <p>
              Outside of work, I love cooking, running, and playing video games.
              I also enjoy <strong className="highlight-text">hardware repairing</strong> — restoring
              old electronics to give them new life.
            </p>
            <p>
              Today, I continue to grow as a developer, combining my operational experience,
              creativity, and curiosity to build technology that makes a difference.
            </p>
          </div>
          <div className="bio-image-wrapper">
            <img className="bio-image rounded-rect" src={photoRunning} alt="Running" />
          </div>
        </section>
      </div>
    </div>
  );
}
