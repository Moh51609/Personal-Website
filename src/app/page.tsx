"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import VantaBackground from "./VantaBackground";
import SkillSet from "./SkillSet";
import VantaBackgroundWaves from "./VantaBackgroundFog";
import VantaBackgroundFog from "./VantaBackgroundFog";
import Projects from "./Projects";
import About from "./About";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Home() {
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="relative min-h-screen">
          <VantaBackground />
          <div
            className="absolute inset-0 backdrop-brightness-50 bg-white/10"
            id="home"
          ></div>

          <Navbar />

          <div className="relative z-10 flex-col text-2xl  md:text-5xl text-center min-h-screen flex justify-center items-center ">
            <div className="  text-gray-300 mb-6">
              Ich bin ein{" "}
              <span>
                <Typewriter
                  words={[
                    "App Entwickler",
                    "Web Designer",
                    "Software Entwickler",
                    "UI/UX Designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <div className="flex-row justify-between">
              <a
                href="mailto:mohamed.amri01@yahoo.de"
                className="relative  text-[#0ea5e9] text-base border-[#0ea5e9] border-1 px-4 py-2 md:px-6 md:py-3 rounded-l-full rounded-r-full hover:bg-[#0ea5e9] hover:text-black transition duration-300"
              >
                Kontaktiere mich
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <About />

      <SkillSet />
      <Projects />

      <section id="impressum">
        <div className="bg-[#0d1117]">
          <footer className="w-full text-center text-sm text-gray-500 py-4">
            <p>
              © 2025 Mohamed Amri |{" "}
              <a href="/impressum" className="text-[#0ea5e9] hover:underline">
                Impressum
              </a>
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
