"use client";
import { motion } from "framer-motion";
import { DiVisualstudio, DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaUnity,
} from "react-icons/fa";
import {
  SiPhpstorm,
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { Opacity } from "tsparticles-engine";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

export default function SkillSet() {
  return (
    <section className="sm:py-15  bg-black overflow-x-hidden" id="skillset">
      <div className="flex pb-10 py-15 lg:flex-row flex-col justify-center items-center mx-auto max-w-7xl gap-5 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="lg:inline-flex sm:mt-0 mb-10  flex h-fit flex-col items-center text-center lg:text-start lg:items-start w-fit bg-[#121212] shadow-2xl backdrop-blur-md border border-[#1e1e1e] rounded-4xl p-3"
        >
          <div className="text-4xl text-white">
            Und das ist mein{" "}
            <div className="text-4xl text-[#0ea5e9]">
              {" "}
              <b>Skillset</b>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: false }}
          className="flex flex-col w-2/3"
        >
          <div className="flex flex-row   flex-wrap   gap-3 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <SiHtml5
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></SiHtml5>
              <span>HTML</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaCss3Alt
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2"
              ></FaCss3Alt>
              <span>CSS</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaPhp
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></FaPhp>
              <span>PHP</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <SiTypescript
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></SiTypescript>
              <span>Typescript</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <SiTailwindcss
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></SiTailwindcss>
              <span>Tailwind</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaJs
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></FaJs>
              <span>Javascript</span>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaFlutter
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></FaFlutter>
              <span>Flutter</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaLaravel
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></FaLaravel>
              <span>Laravel</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <FaNodeJs
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></FaNodeJs>
              <span>NodeJs</span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#111] group rounded-4xl shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
            >
              <TbSql
                size={40}
                className="text-[#0ea5e9] group-hover:text-[#1b1b1b] mb-2 transition duration-300"
              ></TbSql>
              <span>SQL</span>
            </motion.div>
          </div>
          <div className="pt-8">
            <div className="flex flex-row justify-around gap-3 mx-auto max-w-2xl flex-wrap md:flex-nowrap rounded-4xl ">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-60 rounded-4xl group m-1 h-10 bg-[#111] shadow-lg flex flex-row items-center justify-center gap-2 text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
              >
                <div>VSCode</div>
                <DiVisualstudio
                  size={22}
                  className="text-[#0ea5e9] group-hover:text-[#1b1b1b] transition duration-300 justify-center"
                ></DiVisualstudio>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-60 bg-[#111] h-10 rounded-4xl group m-1 shadow-lg flex flex-row items-center justify-center gap-2 text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
              >
                <div>PHPStorm</div>
                <SiPhpstorm
                  size={22}
                  className="text-[#0ea5e9] group-hover:text-[#1b1b1b] transition duration-300 justify-center"
                ></SiPhpstorm>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-60 h-10 rounded-4xl bg-[#111] group m-1 shadow-lg flex flex-row items-center justify-center gap-2 text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
              >
                <div>PostqreSQL</div>
                <DiPostgresql
                  size={22}
                  className="text-[#0ea5e9] group-hover:text-[#1b1b1b] transition duration-300 justify-center"
                ></DiPostgresql>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-60 h-10 rounded-4xl bg-[#111] group m-1 shadow-lg flex flex-row items-center justify-center gap-2 text-white hover:bg-[#0ea5e9] hover:text-[#1b1b1b] transition duration-300 "
              >
                <div>Unity</div>
                <FaUnity
                  size={22}
                  className="text-[#0ea5e9] group-hover:text-[#1b1b1b] transition duration-300 justify-center"
                ></FaUnity>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
