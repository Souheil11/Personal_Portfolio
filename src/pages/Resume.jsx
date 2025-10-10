import Construction from "../components/Construction";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <>
      <div className="ResumeContainer">
        <h1 className="myname">Souhaiel Karbaa</h1>
        <h2 className="position">Full Stack Web Developer</h2>
        <hr />
        <p>
          Adaptable IT enthusiast with a strong foundation in full-stack
          development, web technologies, and networking. Holds a Master’s degree
          in Computer Science from the Kobe Institute of Computing in Japan.
          Experienced in developing responsive applications through hands-on
          projects. Proficient in HTML, CSS, JavaScript, ReactJS, PHP Laravel,
          and other modern technologies. Multilingual in English, French,
          Arabic, and German, with strong problem-solving abilities, effective
          communication skills, and a collaborative mindset.
        </p>
        <hr />
        <h3>Core Skills and Technologies</h3>
        <ul className="skillsList">
          <li>
            <span className="highlight">Front-End Technologies:</span> HTML,
            CSS, JavaScript (ES6+)
          </li>
          <li>
            <span className="highlight">Frameworks and Libraries:</span>{" "}
            ReactJS, Laravel, Jest
          </li>
          <li>
            <span className="highlight">Tools and Version Control:</span> Git,
            GitHub, GitLab, Webpack, npm, Yarn
          </li>
          <li>
            <span className="highlight">Other Skills:</span> RESTfli APIs,
            Cross-browser Compatibility, Docker, AWS, Linux
          </li>
          <li>
            <span className="highlight">Programming Languages:</span> C++,
            Python, PHP
          </li>
          <li>
            <span className="highlight">General IT Skills:</span> Understanding
            of hardware components of servers and computers, familiarity with
            Linux-based systems, and general network systems understanding.
          </li>
        </ul>
        <hr />
        <h3>Personal Projects</h3>
        <ul className="Projects">
          <li>
            <span className="highlight">Full Stack Web Application:</span>{" "}
            Building using ReactJS and Laravel as part of my graduate thesis
            project. The app aims to encourage social collaboration in trash and
            litter collection. GitLab-Link | Youtube
          </li>
          <li>
            <span className="highlight">Airline Booking System:</span> Developed
            a Python-based system for a class project. GitHub-Link | Youtube
          </li>
          <li>
            <span className="highlight">Gym Management Website:</span> Designed
            and implemented with CRUD operations using PHP. GitHub-Link |
            Youtube
          </li>
          <li>
            <span className="highlight">Traffic Light Simulator:</span>{" "}
            Implemented in C++ utilizing an ESP8266 board. GitHub-Link | Youtube
          </li>
          <li>
            <span className="highlight">PDF Word Frequency Counter:</span>{" "}
            Developed using Python, integrating PDF text extraction, keyword
            frequency analysis, and data visualization techniques. GitHub-Link |
            Youtube
          </li>
          <li>
            <span className="highlight">IoT Automatic Pet Door Prototype:</span>{" "}
            Created an IoT prototype for an automatic pet door using C++, to
            facilitate pet access into buildings using sensors and automated
            doors. GitHub-Link | Youtube
          </li>
        </ul>
        <hr />
        <h3>Professional Experience</h3>
        <ul className="Experience">
          <li>
            <span className="highlight">
              Telecommunications & Network Installation Technician, Crosswire
              Ltd. (Temporary Position), Osaka, Japan, (December 2024 –
              Present):
            </span>
          </li>
          <ul>
            <li>
              Installed data and audio cables across various country pavilions
              for Osaka Expo 2025 (Germany, USA, Belgium, Saudi Arabia).
            </li>
            <li>
              Set up and organized server racks and structured cabling inside
              server rooms to maintain optimal network performance and security.
            </li>
            <li>
              Collaborated with engineers and project managers to ensure proper
              network layout and adherence to technical specifications.
            </li>
          </ul>

          <li>
            <span className="highlight">
              Duty Station Manager, Lufthansa Group, Tunis, Tunisia (September
              2015 – September 2022):
            </span>
            <ul>
              <li>
                Led a team of ground staff, fostering a positive work
                environment and promoting teamwork.
              </li>
              <li>
                Managed day-to-day operations at the assigned duty station,
                ensuring smooth functioning of airline activities.
              </li>
              <li>Developed and implemented emergency response plans.</li>
              <li>
                Ensured compliance with airline and aviation regulatory
                standards and safety protocols.
              </li>
              <li>
                <span className="highlight">IT Tasks:</span>
              </li>
              <ul>
                <li>
                  Managed monthly data backups on behalf of IBM service,
                  ensuring data integrity and availability.
                </li>
                <li>
                  Received and executed troubleshooting instructions for
                  anomalies, provided timely reports and feedback to IBM
                  service, and ensured issues were resolved efficiently.
                </li>
                <li>
                  Contributed to the development of an AI-powered chatbot to
                  automate ticket rebooking requests.
                </li>
                <li>
                  Collaborated with IBM Watson during the requirement gathering
                  process and performed data cleaning to prepare high-quality
                  datasets for training the chatbot.
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <span className="highlight">
              Station Supervisor, Lufthansa Group, Tunis, Tunisia (February 2013
              – August 2015):
            </span>
            <ul>
              <li>
                Oversaw aircraft turnaround processes, coordinating with ground
                staff, cabin crew, and maintenance teams.
              </li>
            </ul>
          </li>
          <li>
            <span className="highlight">
              Multi-task Reservations and Ticketing Agent, Lufthansa Group,
              Tunis, Tunisia (November 2011 – February 2013):
            </span>
            <ul>
              <li>
                Assisted customers with booking reservations, providing
                information on flights, fares, and available services.
              </li>
              <li>
                Provided excellent customer service to passengers, addressing
                inquiries, resolving issues, and ensuring a positive travel
                experience.
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h3>Education</h3>
        <ul className="Education">
          <li>
            <span className="highlight">
              Master’s Degree in Computer Science,
            </span>{" "}
            Kobe Institute of Computing (KIC), Japan (2020-2022)
          </li>
          <li>
            <span className="highlight">
              Bachelor’s Degree in in Business English,
            </span>{" "}
            Higher Institute of Applied Studies in Humanities of Tunis, Tunis,
            Tunisia (2008-2011)
          </li>
        </ul>
        <hr />
        <h3>Languages</h3>
        <ul className="Languages">
          <li>
            English <i>(Fluent)</i>
          </li>
          <li>
            French <i>(Fluent)</i>
          </li>
          <li>
            Arabic <i>(Native)</i>
          </li>
          <li>
            German <i>(Intermediate)</i>
          </li>
          <li>
            Japanese <i>(Basic)</i>
          </li>
        </ul>

        <button
          onClick={() => window.open("https://drive.google.com/file/d/1jM3axjy_3z1lUO7Z_pFpRE4EyTNL1eyF/view?usp=sharing")}
          className="downloadResume"
        >
          Download PDF Version{" "}
          <span className="material-symbols-outlined">download</span>
        </button>
      </div>
    </>
  );
}
