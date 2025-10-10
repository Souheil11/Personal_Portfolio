import Construction from "../components/Construction";
import "../styles/Biography.css";
import profilePhoto from "../assets/Souhaiel_profile_photo.png";
import photoAtKic from "../assets/photo_at_kic.jpg";
import photoPresenting from "../assets/photo_presenting_trashtracker.jpg";
import photoatEXPO from "../assets/photo_at_EXPO2025.png";
import photoLufthansa from "../assets/Working_Lufthansa.jpg";
import photoRunning from "../assets/Souhaiel_running.jpg";

export default function Biography() {
  return (
    <>
      <div className="bio-container">
        <div className="bio-story">

        
          <h1 className="bio-header">Biography</h1>

          <img className="profilePhoto" src={profilePhoto} alt="Souhaiel photo" />

          <p>
            Hello, I’m <strong>Souhaiel Karbaa</strong> — an adaptable IT
            enthusiast with a passion for creating technology that connects
            people and improves their daily lives. My journey started far from
            where I am today, and it’s been an exciting path shaped by
            curiosity, travel, and constant learning.
          </p>

          <p>
            I began my professional life in Tunisia, where I worked for the{" "}
            <strong>Lufthansa Group</strong>. For over a decade, I grew through
            multiple roles — from customer service and ticketing to station
            supervision and eventually duty management. Those years taught me
            how to lead teams, solve problems under pressure, and understand the
            power of collaboration. I also found myself drawn to the technical
            side of operations — managing data backups, troubleshooting with IBM
            services, and contributing to an AI chatbot project using IBM Watson
            to automate rebooking requests.
          </p>
<img className="biographyPhotos" src={photoLufthansa} alt="Souhaiel Working for Lufthansa" />
          <p>
            My growing interest in technology and data inspired a bold shift. I
            moved to Japan to pursue a{" "}
            <strong>Master’s degree in Computer Science</strong> at the{" "}
            <strong>Kobe Institute of Computing</strong>. During that time, I
            built several hands-on projects — from web applications to IoT
            prototypes — and deepened my understanding of full-stack development
            using ReactJS, Laravel, Python, and C++.
          </p>

          <img className="biographyPhotos" src={photoAtKic} alt="Photo of Souhaiel at Kobe Institute of Computing" />

          <p>
            My thesis project, the <strong>TrashTracker App</strong>, reflects
            both my technical and social values. It’s a community-driven
            platform designed to encourage environmental awareness and
            collective action in Tunisia through gamification and technology.
            The project allowed me to merge my coding skills with my desire to
            create social impact.
          </p>

          <img className="biographyPhotos" src={photoPresenting} alt="Souhaiel presenting TrashTracker App at Kobe Institute of Computing" />

          <p>
            After graduation, I joined <strong>Crosswire Ltd.</strong> in Osaka,
            Japan, contributing to the infrastructure setup for{" "}
            <strong>Expo 2025</strong>. I worked alongside engineers and project
            managers to install and organize complex network systems across
            international pavilions, ensuring stability, security, and
            performance.
          </p>

          <img className="biographyPhotos" src={photoatEXPO} alt="Souhaiel at EXPO 2025" />

          <p>
            Beyond technology, I’m multilingual — fluent in{" "}
            <strong>English</strong>, <strong>French</strong>, and{" "}
            <strong>Arabic</strong>, with working proficiency in{" "}
            <strong>German</strong> and a growing command of{" "}
            <strong>Japanese</strong>. Communication has always been central to
            how I connect across teams and cultures.
          </p>

          <p>
            Outside of work, I love <strong>cooking</strong>,{" "}
            <strong>running</strong>, and <strong>playing video games</strong>.
            I also enjoy <strong>hardware repairing</strong> — restoring and
            trading old or broken electronics to give them new life. It’s a
            creative outlet that reflects how I see technology: as something
            meant to be explored, improved, and shared.
          </p>
<img className="biographyPhotos" src={photoRunning} alt="Souhaiel running" />


          <p>
            Today, I continue to grow as a developer, combining my operational
            experience, creativity, and curiosity to build technology that makes
            a difference.
          </p>
        </div>
      </div>
    </>
  );
}
