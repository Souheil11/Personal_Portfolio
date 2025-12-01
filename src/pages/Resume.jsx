
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-container fade-in">
      <header className="resume-header fade-in-up">
        <h1 className="myname">Souhaiel Karbaa</h1>
        <h2 className="position">Full Stack Web Developer</h2>
        <p className="summary">
          Adaptable IT enthusiast with a strong foundation in full-stack
          development, web technologies, and networking. Holds a Master’s degree
          in Computer Science from the Kobe Institute of Computing in Japan.
          Multilingual in English, French, Arabic, and German.
        </p>
        <button
          onClick={() => window.open("https://drive.google.com/file/d/1jM3axjy_3z1lUO7Z_pFpRE4EyTNL1eyF/view?usp=sharing")}
          className="downloadResume"
        >
          Download PDF Version{" "}
          <span className="material-symbols-outlined">download</span>
        </button>
      </header>

      <div className="resume-content">
        <section className="resume-section fade-in-up delay-1">
          <h3 className="section-title">Core Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Front-End</h4>
              <div className="tags">
                <span>HTML</span><span>CSS</span><span>JavaScript (ES6+)</span><span>ReactJS</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Back-End</h4>
              <div className="tags">
                <span>PHP</span><span>Laravel</span><span>Python</span><span>C++</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & DevOps</h4>
              <div className="tags">
                <span>Git</span><span>Docker</span><span>AWS</span><span>Linux</span><span>Webpack</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="tags">
                <span>English (Fluent)</span><span>French (Fluent)</span><span>Arabic (Native)</span><span>German (Interm.)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section fade-in-up delay-2">
          <h3 className="section-title">Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Dec 2024 – Present</div>
              <div className="timeline-content">
                <h4>Telecommunications & Network Technician</h4>
                <h5>Crosswire Ltd. (Osaka, Japan)</h5>
                <ul>
                  <li>Installed data/audio cables for Expo 2025 pavilions.</li>
                  <li>Set up server racks and structured cabling.</li>
                  <li>Collaborated with international engineering teams.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Sep 2015 – Sep 2022</div>
              <div className="timeline-content">
                <h4>Duty Station Manager</h4>
                <h5>Lufthansa Group (Tunis, Tunisia)</h5>
                <ul>
                  <li>Led ground staff teams and managed station operations.</li>
                  <li>Managed monthly data backups and IT troubleshooting with IBM.</li>
                  <li>Contributed to AI chatbot development for ticket rebooking.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Feb 2013 – Aug 2015</div>
              <div className="timeline-content">
                <h4>Station Supervisor</h4>
                <h5>Lufthansa Group (Tunis, Tunisia)</h5>
                <ul>
                  <li>Oversaw aircraft turnaround and coordinated ground teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section fade-in-up delay-3">
          <h3 className="section-title">Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022 – 2024</div>
              <div className="timeline-content">
                <h4>Master’s Degree in Computer Science</h4>
                <h5>Kobe Institute of Computing (Japan)</h5>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2008 – 2011</div>
              <div className="timeline-content">
                <h4>Bachelor’s Degree in Business English</h4>
                <h5>Higher Institute of Applied Studies in Humanities (Tunisia)</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
