"use client";

import Image from "next/image";
// import Link from "next/link";
import { useRef, useState } from "react";
import SkillsCard from "../components/skillsCard";
import ProjectsCard from "../components/projectsCard";

const HomePage = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const contactRef = useRef<HTMLDivElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const experienceRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contactmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message Sent Successfully!");
      } else {
        setStatus("Sorry! Couldn't send message");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="main-container m-auto flex flex-col ">
      <div className="fixed left-0 w-[100%]  z-1">
        <nav className="header-nav py-4  backdrop-blur-2xl ">
          <div className="w-[90%] flex items-end justify-between m-auto">
            <a
              onClick={() => scrollToSection(heroRef)}
              className="font-extrabold text-2xl text-highlight cursor-pointer"
            >
              Rijan
            </a>

            <div className="flex gap-12 max-sm:hidden">
              <a
                onClick={() => scrollToSection(skillsRef)}
                className="cursor-pointer"
              >
                My Skills
              </a>
              <a
                onClick={() => scrollToSection(projectsRef)}
                className="cursor-pointer"
              >
                My Projects
              </a>
              <a
                onClick={() => scrollToSection(experienceRef)}
                className="cursor-pointer"
              >
                Experience
              </a>
              <a
                onClick={() => scrollToSection(contactRef)}
                className="cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* hero */}
      <div
        ref={heroRef}
        className="hero-section flex items-center justify-between  py-32  w-[85%] m-auto"
      >
        <div className="hero-left flex flex-col gap-4">
          <div className="text-4xl">Hi, I’m Rijan Niraula</div>
          <div className="text-highlight">
            Frontend Developer | Graphics Designer
          </div>
          <div>
            I am a web developer and a graphics designer based in Biratnagar,
            Nepal and i’m very passionate and dedicated to my work
          </div>
          <div>
            <div>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="cursor-pointer hover:bg-[#32D0F4] hover:text-[#e9e9e9] py-2 px-5 bg-[#e9e9e9] rounded-3xl text-black font-bold w-fit"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <Image
              src="/profile-photo.png"
              alt="Rijan Niraula"
              width={300}
              height={300}
              className="rounded-full shadow-[0px_0px_98.3px_20px_#343434] max-sm:hidden"
            />
          </div>
        </div>
      </div>

      {/* skills */}
      <div
        ref={skillsRef}
        className="skills-container py-8 px-18  bg-[#1f1f1f] flex flex-col items-center "
      >
        <div className="text-center text-highlight text-3xl">Skills</div>
        <div className="skills-cards flex flex-wrap  justify-around py-10 gap-8">
          <SkillsCard img="html-icon.svg" name="HTML" />
          <SkillsCard img="css-icon.svg" name="CSS" />
          <SkillsCard img="js-icon.svg" name="JavaScript" />
          <SkillsCard img="tailwind-css-icon.svg" name="Tailwind" />
          <SkillsCard img="react-js-icon.svg" name="React.Js" />
          <SkillsCard img="nextjs-icon.svg" name="Next.Js" />
        </div>
      </div>

      {/* Projects */}
      <div
        ref={projectsRef}
        className="projects-container py-8  flex flex-col items-center w-[100%] "
      >
        <div className="text-center text-highlight text-3xl">Projects</div>
        <div className="project-cards flex flex-wrap justify-around py-10 w-[87%] gap-8">
          <ProjectsCard
            img="image.png"
            title="MyMovieList"
            description="Web-based movie rating and recommendation platform using React.js and Node.js"
          />
        </div>
      </div>

      {/* experience */}
      <div
        ref={experienceRef}
        className="experience-container bg-[#1f1f1f] py-8 flex items-center justify-center"
      >
        <div className="w-[87%] flex flex-col justify-center ">
          <div className="text-center text-highlight text-3xl">Experience</div>
          <div className=" flex flex-wrap justify-between ">
            <div className="exp-left">
              <div className="text-4xl font-bold py-4">Education</div>
              <div className="flex">
                <div className="border-2 mr-3"></div>
                <div>
                  <ul className="list-disc ml-1 p-2">
                    <li className="pb-8">
                      <div className="font-bold">
                        Bachelors in Science of Computer Science and Information
                        Technology
                      </div>
                      <div className="font-bold">
                        Birat Kshitiz College affiliated to Tribhuvan University
                      </div>
                      <div>Biratnagar, Morang, Nepal</div>
                      <div>[ 2020 - Running]</div>
                    </li>
                    <li className="pb-8">
                      <div className="font-bold">+2 Computer Science</div>
                      <div className="font-bold">
                        Shiksha Deep Boarding School
                      </div>
                      <div>Biratnagar, Morang, Nepal</div>
                      <div>[ 2018 - 2020 ]</div>
                      {/* <div>3.29 GPA</div> */}
                    </li>
                    <li className="pb-8">
                      <div className="font-bold">School Level</div>
                      <div className="font-bold">Modern Era English School</div>
                      <div>Biratnagar, Morang, Nepal</div>
                      {/* <div>3.90 GPA</div> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="exp-right">
              <div className="text-4xl font-bold py-4">Experience</div>
              <div className="flex">
                <div className="border-2 mr-3"></div>
                <ul className="list-disc ml-1 p-2">
                  <li className="pb-4">
                    <div className="font-bold">
                      <div>Graphics Designer (Remote)</div>
                      <div>Pinnacle Sprach Akademie</div>
                      <div> Putalisadak, Kathmandu, Nepal</div>
                    </div>
                    <div>[ 2022 - Present ]</div>
                  </li>
                  <li className="pb-4">
                    <div className="font-bold">
                      <div>Secondary Level Computer Teacher</div>
                      <div>Modern Era English School</div>
                      <div>Biratnagar, Nepal</div>
                    </div>
                    <div>[ 2023 - Present ]</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div ref={contactRef} className="contact-container py-8">
        <div>
          <div className="text-center text-highlight text-3xl">Contact Me</div>

          <div className=" py-8 ">
            <div className=" flex justify-center  items-center gap-16 flex-wrap">
              <div>
                <div className="text-2xl font-bold py-4 text-center sm:text-left">
                  Send Me a Message
                </div>
                <form
                  className="flex flex-col gap-6 w-full max-w-md mx-auto "
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                    className="bg-[#D9D9D9] rounded-lg text-black py-4 pr-28 pl-4 w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={username}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    className="bg-[#D9D9D9] rounded-lg text-black py-4 pr-28 pl-4 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />

                  <textarea
                    placeholder="Enter your Message"
                    name="message"
                    className="bg-[#D9D9D9] rounded-lg text-black py-4 pr-28 pl-4 w-full min-h-[120px]"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                  <div className="text-highlight">
                    {status && <p>{status}</p>}
                  </div>
                  <input
                    type="submit"
                    className="bg-[#208b9e] hover:text-[#e9e9e9] hover:bg-[#77b0bb] rounded-[12px] p-2 font-black  cursor-pointer"
                  />
                </form>
              </div>
              {/* <div className="border-1 w-xl xm:hidden"></div> */}
              {/* yaha samma */}
              <div>
                {/* <div className="w-[100%] text-wrap">
                  Feel free to get in touch with me. I am open to discussing new
                  projects and opportunities to be part of your vision
                </div> */}

                <div className=" p-4 flex  gap-4 items-center">
                  <Image
                    src="gmail-icon.svg"
                    alt={""}
                    height={10}
                    width={50}
                    className=""
                  />
                  <div>
                    <div className="font-bold">Email Me</div>
                    <div>rijann38@gmail.com</div>
                  </div>
                </div>

                {/* linkedin */}
                <div className=" p-4 flex  gap-4 items-center">
                  <Image
                    src="linkedin-icon.svg"
                    alt={""}
                    height={10}
                    width={50}
                    className=""
                  />
                  <div>
                    <div className="font-bold">Find me in LinkedIn</div>
                    <div>in/rijan-niraula</div>
                  </div>
                </div>

                {/* whatsapp */}
                <div className=" p-4 flex  gap-4 items-center">
                  <Image
                    src="whatsapp-icon.svg"
                    alt={""}
                    height={10}
                    width={50}
                    className=""
                  />
                  <div>
                    <div className="font-bold">Call me</div>
                    <div>+9779863018630</div>
                  </div>
                </div>

                {/* social media */}
                <div className="p-4">
                  <div className=" font-bold">Social Media</div>
                  <div className="flex pt-2 gap-4">
                    <div className="flex gap-4 items-center">
                      <Image
                        src="facebook-icon.svg"
                        alt={""}
                        height={10}
                        width={50}
                        className=""
                      />
                      <div>
                        <div className="font-bold">Facebook</div>
                        <div>/rijanniraula8</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Image
                        src="instagram-icon.svg"
                        alt={""}
                        height={10}
                        width={50}
                        className=""
                      />

                      <div>
                        <div className="font-bold">Instagram</div>
                        <div>/rijanstagram</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#1f1f1f] text-center p-2">© 2025 Rijan Niraula</div>
    </div>
  );
};
export default HomePage;
