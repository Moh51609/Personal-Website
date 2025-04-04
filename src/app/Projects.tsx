"use client";
import { motion } from "framer-motion";
import ProjectsDesktop from "./ProjectsDesktop";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import dynamic from "next/dynamic";

const ProjectsMobile = dynamic(() => import("./ProjectsMobile"), {
  ssr: false,
});

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <section
      className="bg-black pb-16 justify-center items-center overflow-x-hidden"
      id="projects"
    >
      <div className="w-full py-15">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-fit mx-auto  flex bg-[#121212] shadow-2xl text-center justify-center backdrop-blur-md border border-[#1e1e1e] rounded-4xl p-3"
        >
          <div className="text-4xl text-white">Meine</div>
          <div className="text-4xl text-[#0ea5e9] font-bold ml-2">Projekte</div>
        </motion.div>
      </div>
      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
    </section>
  );
}
