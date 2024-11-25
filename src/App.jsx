/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Header from "./components/Header";

import Layout from "./components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="pb-2">
        <div className="container mx-auto pt-2 h-screen">
          <img
            className="bg-white w-48 md:w-56 lg:w-64 mx-auto mt-6 border-4 border-white border-solid rounded-full shadow-lg"
            src="fotodiri.png"
            alt="fotodiri"
          />
          {/* <h3 className="mx-auto text-center my-2 text-4xl md:text-5xl lg:text-6xl font-bold text-violet-100 uppercase">
            Rayhan Adri
          </h3> */}
          <div className="mx-auto text-center ">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-violet-100 bg-clip-text text-transparent uppercase">
              Rayhan Adri
            </span>
          </div>

          <div className="text-center my-3">
            <span
              href="#"
              className="mx-1 text-xs md:text-sm lg:text-base bg-violet-100 text-violet-900 p-2 rounded-lg"
            >
              Software Engineer
            </span>
            <span
              href="#"
              className="mx-1 text-xs md:text-sm lg:text-base bg-violet-100 text-violet-900 p-2 rounded-lg"
            >
              Full-stack
            </span>
            <span
              href="#"
              className="mx-1 text-xs md:text-sm lg:text-base bg-violet-100 text-violet-900 p-2 rounded-lg"
            >
              Bank-End
            </span>
            <span
              href="#"
              className="mx-1 text-xs md:text-sm lg:text-base bg-violet-100 text-violet-900 p-2 rounded-lg"
            >
              Front-End
            </span>
          </div>
          <div className="mx-auto text-center text-2xl font-bold text-violet-100 md:text-3xl lg:text-4xl mb-4">
            <a
              href="mailto:rayhanadri@gmail.com"
              className="hover:shadow-lg hover:text-violet-400 mx-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.linkedin.com/in/rayhan-adri/"
              className="hover:shadow-lg hover:text-violet-400 mx-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/rayadri97"
              className="hover:shadow-lg hover:text-violet-400 mx-2"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://www.instagram.com/rayadri97"
              className="hover:shadow-lg hover:text-violet-400 mx-2"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://wa.me/+6285966556997"
              className="hover:shadow-lg hover:text-violet-400 mx-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div className=" bg-gradient-to-r from-indigo-300 to-violet-100 w-10/12 md:w-9/12 lg:w-8/12 xl:w-1/2 mx-auto opacity-70 p-2 mb-4 rounded-tr-xl rounded-bl-2xl">
            <div className="mx-auto">
              <ul className="p-2 w-full mx-auto text-md lg:text-lg xl:text-xl lg:ml-8 list-disc pl-5 ml-2 text-violet-950">
                <li>Software engineer with over three years of expertise.</li>
                <li>Working on innovative software solutions.</li>
                <li>
                  Developing software systems utilizing various technology
                  stacks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" status after 2 seconds
    });
  };

  return (
    <button
      className="bg-violet-800 text-violet-100 p-2 ml-2 mt-2 rounded-md"
      onClick={handleCopy}
    >
      <FontAwesomeIcon icon={faCopy} />
      {copied ? " Copied!" : " Copy"}
    </button>
  );
};

const TextInputWithCopy = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="block text-left mx-2 mt-4 font-bold">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="ml-2 px-3 py-2 border shadow rounded"
        readOnly={true}
      />
      <CopyButton text={value} />
    </div>
  );
};

function Contact() {
  const [setIsCopied1] = useState(false);
  const [setIsCopied2] = useState(false);
  const [setIsCopied3] = useState(false);

  return (
    <>
      <div className="container w-full md:w-11/12 lg:w-9/12 mx-auto mt-4">
        <div className="bg-violet-100 px-4 pb-4 pt-2 m-2 rounded-lg mx-auto text-center">
          <div className="mx-auto text-left w-full pl-20 md:w-8/12 xl:w-1/2 xl:pl-24">
            <TextInputWithCopy
              label="Email"
              value="rayhanadri@gmail.com"
              onChange={(e) => setIsCopied1(e.target.value)}
            />
            <TextInputWithCopy
              label="Phone/WhatsApp"
              value="+6285966556997"
              onChange={(e) => setIsCopied2(e.target.value)}
            />
            <TextInputWithCopy
              label="LinkedIn Page"
              value="https://www.linkedin.com/in/rayhan-adri/"
              onChange={(e) => setIsCopied3(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  const projectList = [
    {
      id: 1,
      link: "https://github.com/rayhanadri/ParkirWebApps",
      img: "project/profile.jpg",
      name: "Personal Web Profile",
      description:
        "Web based application to show detailed profile information created using React.js and TailwindCSS.",
      techstack: ["React.js", "Tailwind CSS"],
    },
    {
      id: 2,
      link: "https://github.com/rayhanadri/ParkirWebApps",
      img: "project/parkirapp.jpg",
      name: "Parkir Web Apps",
      description:
        "Web based application to simulate vehicle parking system. Including feature to monitor current parked vehicle and tariff settings by vehicle type.",
      techstack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    },
    {
      id: 3,
      link: "https://github.com/rayhanadri/IndonesianVtuberDB",
      img: "project/ivdb.jpg",
      name: "Indonesian Vtuber Database",
      description:
        "Indonesian Vtuber Database is a website to collect data and store interesting clips from various Indonesian virtual youtuber streams. Clips about your favourite Indonesian Vtuber will be posted here.",
      techstack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    },
    {
      id: 4,
      link: "https://github.com/rayhanadri/ReactJS_TicTacToe",
      img: "project/tictactoe.jpg",
      name: "React.js Tic Tac Toe",
      description:
        "Interactive tic tac toe game created using React.js also featured with move history logging that allow player to move back to previous moves.",
      techstack: ["React.js", "Vite"],
    },
    {
      id: 5,
      link: "https://github.com/rayhanadri/NJS_ContactApp_MongoDB",
      img: "project/contact.jpg",
      name: "Node.js Contact App",
      description:
        "Simple contact app using MongoDB. Enable user to store contact information such as name, email, and phone number in the website.",
      techstack: ["Node.js", "MongoDB", "Bootstrap"],
    },
    {
      id: 6,
      link: "https://github.com/rayhanadri/genderize_web",
      img: "project/genderize.jpg",
      name: "Gender Checker Web UI",
      description:
        "Web user interface consuming API from genderize.io to detect gender likeliness of inputted name.",
      techstack: ["Javascript", "Bootstrap"],
    },
    {
      id: 7,
      link: "https://github.com/rayhanadri/SIMasjid-laravel-clean",
      img: "project/simasjid.jpg",
      name: "Mosque Asset Information System",
      description:
        "Web system for mosque asset management solutions. Enable users to record assets' status, enable asset tracking, and create new asset request.",
      techstack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
        {projectList.map((project) => (
          <div
            className="bg-violet-100 container mb-2 rounded-md shadow-lg overflow-hidden mx-auto"
            key={project.id}
          >
            <a href={project.link} target="_blank">
              <img src={project.img} alt={project.name} />
              <h3 className="text-justify px-4 pt-2 text-lg font-semibold underline text-violet-800 hover:font-bold hover:text-fuchsia-900">
                {project.name}
              </h3>
            </a>
            <p className="text-justify text-md px-4 mb-4">
              {project.description}
            </p>
            <div className="p-4  mb-4 text-xs">
              <div>
                {project.techstack.map((item, index) => (
                  <a
                    href="#"
                    className="font-semibold bg-violet-800 text-violet-100 p-2 mb-10 mx-1 rounded-md"
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Resume() {
  return (
    <>
      <div className="w-full md:w-11/12 lg:w-9/12 mx-auto  text-justify rounded-lg pt-2 mb-2">
        <div className="bg-gradient-to-r from-indigo-600 to-sky-300 m-2 rounded-md p-4 text-right">
          <a
            href="/CV_Rayhan.pdf"
            className="bg-violet-700 text-violet-100 rounded-md p-2 mr-2 hover:bg-violet-900"
          >
            Download (Functional)
          </a>
          <a
            href="/CV_Rayhan_ATS.pdf"
            className="bg-violet-700 text-violet-100 rounded-md p-2 hover:bg-violet-900"
          >
            Download (ATS Format)
          </a>
        </div>
      </div>
      <div className="container w-full md:w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-0.5">
        <div className="bg-violet-100 px-4 pb-4 pt-2 text-justify m-2 rounded-lg">
          <span className="block text-center mb-2 font-bold text-xl bg-violet-900 text-violet-100 mx-auto rounded-md pb-1  ">
            Experience
          </span>
          <div>
            <h3 className="font-bold text-lg text-violet-900">
              Sinarmas Asia Pulp & Paper (APP)
            </h3>
            <div>
              <div className="grid grid-cols-2">
                <h4 className="inline-block font-semibold text-base">
                  IT Software Specialist
                </h4>
                <div className="text-right">Mar 2023 - Oct 2024</div>
              </div>
            </div>
            <div>
              <h4>Job Description: </h4>
              <ul className="list-disc ml-4">
                <li>Maintain software systems.</li>
                <li>
                  Develop new software systems to support user works, improve
                  company business processes, and improve reporting processes.
                </li>
                <li>
                  Enhance existing software to be relevant to business
                  processes.
                </li>
                <li>
                  Support and collaborate with various stakeholders to speed up
                  the company automation process.
                </li>
              </ul>
            </div>
            <hr className="border-2 border-violet-100 opacity-50 my-2" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-violet-900">
              Bank OCBC NISP
            </h3>
            <div className="grid grid-cols-2">
              <h4 className="inline-block font-semibold text-base">
                Software Engineer - Payment
              </h4>
              <div className="text-right">Aug 2021 - Mar 2023</div>
            </div>
            <div>
              <h4>Job Description: </h4>
              <ul className="list-disc ml-4">
                <li>Develop software to support the bank payment solution.</li>
                <li>
                  Create software documentation, manage software releases, and
                  manage code versioning.
                </li>
                <li>
                  Create test cases and do software tests to ensure the quality
                  of delivered software.
                </li>
              </ul>
            </div>
            <hr className="border-2 border-violet-100 opacity-50 my-2" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-violet-900">
              Fakultas Ilmu Komputer Universitas Brawijaya
            </h3>
            <div className="grid grid-cols-2">
              <h4 className="inline-block font-semibold text-base">
                Laboratory Assistant
              </h4>
              <div className="text-right">Aug 2021 - Mar 2023</div>
            </div>
            <div>
              <h4>Job Description: </h4>
              <ul className="list-disc ml-4">
                <li>
                  Practicum Laboratory Assistant for basic programming, basic
                  database, and database administration courses.
                </li>
                <li>Mentor students and collaborate with lecturers in doing practical courses.</li>
                <li>Assess students’ practicum grades.</li>
              </ul>
            </div>
          </div>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />
        </div>
        <div className="bg-violet-100 px-4 pb-4 pt-2 text-justify m-2 rounded-lg">
          <span className="block text-center mb-2 font-bold text-xl bg-violet-900 text-violet-100 mx-auto rounded-md pb-1  ">
            Education
          </span>
          <div>
            <h3 className="font-bold text-lg text-violet-900">
              Brawijaya University
            </h3>
            <div>
              <div className="grid grid-cols-2">
                <div className="">
                  <div className="font-semibold text-base">
                    Bachelor of Computer Science, Information Systems
                  </div>
                  <div className="font-base text-base">GPA: 3.74</div>
                </div>
                <div className="text-right">2015 - 2020</div>
              </div>
            </div>
            <hr className="border-2 border-violet-100 opacity-50 my-2" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-violet-900">
              SMA Negeri 1 Kota Serang
            </h3>
            <div>
              <div className="grid grid-cols-2">
                <div className="">
                  <div className="font-semibold text-base">
                    Senior High School
                  </div>
                </div>
                <div className="text-right">2013 - 2015</div>
              </div>
            </div>
          </div>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />

          <span className="block text-center mt-6 mb-2 font-bold text-xl bg-violet-900 text-violet-100 mx-auto rounded-md pb-1  ">
            Language
          </span>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />
          <h3 className="font-bold text-lg text-violet-900">English</h3>
          <div>
            <div className="font-semibold text-base">Fluent (TOEFL: 547)</div>
          </div>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />
          <h3 className="font-bold text-lg text-violet-900">Japanese</h3>
          <div>
            <div className="font-semibold text-base">Basic (JLPT: N5)</div>
          </div>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />
          <h3 className="font-bold text-lg text-violet-900">Indonesian</h3>
          <div>
            <div className="font-semibold text-base">Native</div>
          </div>
          <hr className="border-2 border-violet-100 opacity-50 my-2" />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Apply Layout to a group of routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
