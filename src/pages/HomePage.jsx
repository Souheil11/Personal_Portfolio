import "../styles/HomePage.css";
import { SocialIcon } from "react-social-icons";

import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function HomePage() {

  const [repoCount, setRepoCount] = useState("-");

  useEffect(() => {
    fetch("https://api.github.com/users/souheil11")
      .then((response) => response.json())
      .then((data) => setRepoCount(data.public_repos))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const resumeUrl =
    "https://drive.google.com/file/d/1yQHjAh-MC7-ifhMGM__oX0rJ6WSaFbln/view?usp=sharing";


  return (
    <>


      <main>
        <section>
          <aside>
            <div className="selfPresentation">
              <h3 className="title">Full-Stack Developer</h3>
              <h1 className="hello">
                Hello I'm <br />
                <span className="name">Souhaiel Karbaa</span>
              </h1>
              <h3 className="description">
                Enthusiastic Full-Stack Web Developer with profieciency in
                modern Technologies such as JavaScript, PHP, ReactJS and
                Laravel, always eager to learn and very flexible to adapt and
                acquire new skills
              </h3>
            </div>
            <div className="infoLinks">
              <button
                onClick={() => window.open(resumeUrl)}
                className="downloadCV"
              >
                Download CV{" "}
                <span className="material-symbols-outlined">download</span>
              </button>

              <div className="socialLinks">
                <SocialIcon
                  bgColor="#1c1c22"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://www.linkedin.com/in/souhaiel-karbaa"
                />
                <SocialIcon
                  bgColor="#1c1c22"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://github.com/Souheil11"
                />
                <SocialIcon
                  bgColor="#1c1c22"
                  fgColor="#00ff99"
                  target="_blank"
                  url="https://gitlab.com/Souheil11"
                />
              </div>
            </div>
          </aside>

          <div className="image">
            <img
              className="photo"
              src="./src/assets/photo_souhaiel_karbaa.png"
              alt="photo of souhaiel karbaa"
            />
          </div>
        </section>
        <div className="stats">
          <div className="statCard">
            <span className="number">11</span>
            <br />
            Years of Experience
          </div>
          <div className="statCard">
            <span className="number">{repoCount}</span>
            <br />
            Repositories Created
          </div>
          <div className="statCard">
            <span className="number">6</span>
            <br />
            Technologies Mastered
          </div>
          <div className="statCard">
            <span className="number">100</span>
            <br />
            Code Commits
          </div>
        </div>
      </main>

    </>
  );
}
