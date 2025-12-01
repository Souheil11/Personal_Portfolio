
import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="projects-container fade-in">
      <h1 className="pageTitle fade-in-up">Personal Projects</h1>

      <div className="projects-grid fade-in-up delay-1">
        <Project
          projectName="TrashTracker – A Full-Stack Web Application for Community Litter Collection"
          description="TrashTracker is a full-stack web application built with ReactJS and Laravel that motivates communities to engage in litter collection. Through gamification, users earn points, badges, and leaderboard rankings by creating and joining clean-up events, submitting photos, and collaborating in groups, fostering long-term environmental awareness and action."
          techonolgies="ReactJS, Laravel, MySQL, HTML, CSS, JavaScript"
          links={[
            { name: "GitLab", url: "https://gitlab.com/app383515/TrashTracker/" },
            {
              name: "YouTube",
              url: "https://www.youtube.com/watch?v=0fSbcxTEjHY&feature=youtu.be",
            },
          ]}
        />

        <Project
          projectName="Gym Management System"
          description="The Gym Management Website is a PHP-based application designed to streamline gym operations. It features full CRUD functionality for managing members, trainers, classes, and subscriptions. The system improves efficiency by providing administrators with easy data management tools while offering users a clear interface to track memberships and schedules."
          techonolgies="HTML, CSS, PHP, MySQL"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/Souheil11/Gym_Management_System",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/watch?v=o_eByk6Pk-U&feature=youtu.be",
            },
          ]}
        />
        <Project
          projectName="Airline Booking System"
          description="A Python-based airline booking system developed as a class project. It allows users to book flights, calculate ticket prices including extra services, and generate printable booking confirmations. The system demonstrates core programming concepts such as input validation, modular design, and efficient data handling in Python."
          techonolgies="Python"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/Souheil11/Airline_Booking_System",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/watch?v=4XeWTC1xzhg&feature=youtu.be",
            },
          ]}
        />
        <Project
          projectName="PDF Keyword Analyzer"
          description="PDF Keyword Analyzer is a Python-based automation tool that extracts text from PDF documents, counts keyword occurrences, and generates detailed Excel reports. Built with PyMuPDF, pandas, and regex, the system enables efficient text analysis across multiple files, making it useful for research, audits, and data-driven document insights."
          techonolgies="Python, PyMuPDF, pandas, regex"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/Souheil11/PDF-Word-Frequency-Counter",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/watch?v=pi4gI3IqRro",
            },
          ]}
        />
        <Project
          projectName="Traffic Light Simulator"
          description="Traffic Light Simulator is an embedded systems project developed in C++ on an ESP8266 microcontroller. The system replicates real-world traffic signal cycles, controlling LED lights to simulate stop, caution, and go states. It demonstrates IoT hardware programming, timing control, and microcontroller-based automation for smart city applications."
          techonolgies="C++, ESP8266, Arduino IDE"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/Souheil11/Traffic-Light-Simulator",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/shorts/yePtlT3ds_A",
            },
          ]}
        />

        <Project
          projectName="SmartPetDoor – An IoT Prototype for Automated Pet Access"
          description="SmartPetDoor is an IoT prototype built with C++ and sensor integration to automate pet access in and out of buildings. The system uses motion and proximity sensors to detect pets, triggering an automated door mechanism. This project highlights embedded programming, IoT hardware control, and practical applications of smart home technology."
          techonolgies="C++, ESP8266, IoT Sensors"
          links={[
            {
              name: "GitHub",
              url: "https://github.com/Souheil11/Automatic-Pet-Door",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/watch?v=2w2G5F-EXvc",
            },
          ]}
        />
      </div>
    </div>
  );
}
