"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0d1117] overflow-x-hidden">
      <div className="  bg-[#0d1117] py-16">
        <motion.div
          className="flex flex-col space-y-6 items-center text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div
            className=" font-bold text-white items-center pt-15 flex space-x-2 "
            id="about"
          >
            <div className="text-5xl ">Über </div>
            <div className="text-5xl text-[#0ea5e9]"> Mich</div>
          </div>
          <p className="max-w-2xl space-y-6 px-6 text-white">
            Mit einem Blick für Details und einem hohen Qualitätsanspruch setze
            ich Projekte strukturiert und zielgerichtet um. Zuverlässigkeit,
            Engagement und eine klare Kommunikation stehen für mich an erster
            Stelle.
          </p>

          <div className="h-0.5  w-20 bg-[#0ea5e9]"></div>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto">
          <motion.div
            className="w-full lg:w-1/3 max-w-sm border-2 rounded-4xl border-[#1b1b1b] bg-[#0a0a0a] p-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src="/Bewerbungsfoto-ohneH.png"
              alt="Bewerbungsbild"
              className="w-full h-auto rounded-4xl"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2  text-white space-y-6 w-full text-center lg:text-left lg:items-start justify-center flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="flex flex-wrap text-2xl font-semibold justify-center lg:justify-start">
              <span className="mr-2">Hey, mein Name ist</span>
              <span className="text-[#0ea5e9]">Mohamed Amri</span>
            </div>

            <p className="text-base leading-relaxed ">
              Ein leidenschaftlicher Fullstack Entwickler mit Fokus auf moderne
              Webtechnologien. Ich entwickle intuitive Benutzeroberflächen und
              leistungsstarke Anwendungen – vom Design bis zur Umsetzung.
              Besonders wichtig ist mir dabei sauberes Code-Design und eine
              benutzerfreundliche Nutzererfahrung. Mit Begeisterung arbeite ich
              an kreativen digitalen Lösungen für komplexe Herausforderungen.
              Mein Ziel: Technik verständlich machen und innovative Ideen zum
              Leben erwecken.
            </p>

            <div className="grid sm:grid-cols-2 grid-cols-[40%_60%] gap-y-2 text-sm max-w-md text-start justify-start pb-6 ">
              <span className="font-semibold">Name</span>
              <span>: Mohamed Amri</span>
              <span className="font-semibold">Alter</span>
              <span>: 23</span>
              <span className="font-semibold">Wohnort</span>
              <span>: Mülheim an der Ruhr</span>
              <span className="font-semibold">Geboren am</span>
              <span>: 16.09.2001</span>
              <span className="font-semibold">Handynummer</span>
              <span>: +49 163 2314692</span>
              <span className="font-semibold ">Email</span>
              <span>: mohamed.amri01@yahoo.de</span>
              <span className="font-semibold">Sprachen</span>
              <span>: Deutsch, Englisch</span>

              <div className="justify-start flex pt-6 col-span-2">
                <a
                  href="/Lebenslauf.pdf"
                  download
                  className=" border border-[#0ea5e9] text-[#0ea5e9] px-6 py-2 rounded-full hover:bg-[#0ea5e9] hover:text-black transition duration-300"
                >
                  Download Lebenslauf
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
