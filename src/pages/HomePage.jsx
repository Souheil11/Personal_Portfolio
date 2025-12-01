import "../styles/HomePage.css";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

export default function HomePage() {
  const username = "Souheil11";
  const [totalGithubCommits, setTotalGithubCommits] = useState("-");

  useEffect(() => {
    const fetchTotalCommits = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/commits?q=author:${username}`,
          {
            headers: {
              Accept: "application/vnd.github.cloak-preview",
            },
          }
        );
        setTotalGithubCommits(response.data.total_count + 50); // Adding 50 as a count for GitLab commits
      } catch (error) {
        console.error(
          "Error fetching commits:",
          error.response?.data || error.message
        );
      }
    };
    fetchTotalCommits();
  }, [username]);

  const [repoCount, setRepoCount] = useState("-");

  useEffect(() => {
    fetch("https://api.github.com/users/souheil11")
      .then((response) => response.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const resumeUrl =
    "https://drive.google.com/file/d/1jM3axjy_3z1lUO7Z_pFpRE4EyTNL1eyF/view?usp=sharing";

  const resumeDirectDownloadLink = resumeUrl
    .replace(
      "https://drive.google.com/file/d/",
      "https://drive.google.com/uc?export=download&id="
    )
    .replace("/view?usp=sharing", "");

  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="subtitle fade-in-up">Full-Stack Developer | CCNA Certified</span>
            <h1 className="title fade-in-up delay-1">
              Hello I&apos;m <br />
              <span className="highlight-name">Souhaiel Karbaa</span>
            </h1>
            <p className="description fade-in-up delay-2">
              Enthusiastic Full-Stack Web Developer with proficiency in modern
              technologies such as JavaScript, PHP, ReactJS and Laravel. Always
              eager to learn and flexible to adapt and acquire new skills.
            </p>

            <div className="cta-group fade-in-up delay-3">
              <button
                onClick={() => window.open(resumeDirectDownloadLink)}
                className="btn-download"
              >
                <span>Download CV</span>
                <span className="material-symbols-outlined icon">download</span>
              </button>

              <div className="social-links">
                <SocialIcon
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://www.linkedin.com/in/souhaiel-karbaa"
                  style={{ height: 40, width: 40, border: '1px solid #00ff99', borderRadius: '50%' }}
                />
                <SocialIcon
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://github.com/Souheil11"
                  style={{ height: 40, width: 40, border: '1px solid #00ff99', borderRadius: '50%' }}
                />
                <SocialIcon
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://gitlab.com/Souheil11"
                  style={{ height: 40, width: 40, border: '1px solid #00ff99', borderRadius: '50%' }}
                />
              </div>
            </div>
          </div>

          <div className="hero-image fade-in delay-2">
            <div className="image-wrapper">
              <img
                src="./src/assets/photo_souhaiel_karbaa.png"
                alt="Souhaiel Karbaa"
                className="profile-photo"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section fade-in-up delay-4">
        <div className="stat-card">
          <span className="stat-number">
            <CountUp end={11} duration={2.5} />+
          </span>
          <span className="stat-label">Years of Experience</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {repoCount !== "-" ? <CountUp end={repoCount} duration={2.5} /> : "-"}
          </span>
          <span className="stat-label">Repositories Created</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            <CountUp end={6} duration={2.5} />
          </span>
          <span className="stat-label">Technologies Mastered</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">
            {totalGithubCommits !== "-" ? <CountUp end={totalGithubCommits} duration={2.5} /> : "-"}
          </span>
          <span className="stat-label">Code Commits</span>
        </div>
      </section>
    </main>
  );
}
