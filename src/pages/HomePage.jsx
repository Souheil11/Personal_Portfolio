import "../styles/HomePage.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export default function HomePage() {
  const resumeUrl =
    "https://drive.google.com/file/d/1mHkfqwU2bh-_dMzxwpDtHvOEjeT2BVOP/view?usp=sharing";
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
                  url="https://www.linkedin.com/in/souhaiel-karbaa"
                />
                <SocialIcon
                  bgColor="#1c1c22"
                  fgColor="#00ff99"
                  url="https://github.com/Souheil11"
                />
                <SocialIcon
                  bgColor="#1c1c22"
                  fgColor="#00ff99"
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
            <span className="number">10</span>
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
