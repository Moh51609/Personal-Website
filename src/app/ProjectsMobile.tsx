"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

export default function ProjectsMobile() {
  const projects = [
    {
      title: "Personal Website",
      description:
        "Moderne Portfolio-Website zur Präsentation meiner Arbeiten. Entwickelt mit Fokus auf Design und Benutzerfreundlichkeit.",
      tech: ["Tailwind", "Typescript", "NodeJS"],
      image: "/PersonalWebsiteImage.png",
    },
    {
      title: "BiteNote",
      description:
        "Benutzerfreundliche App zum Tracken von Restaurantbesuchen. Mit Datenbankanbindung, Login als auch Regsiter Funktionen und detailliertem Eintragen von Restaurant Erfahrungen",
      tech: ["Flutter", "Dart", "SQL"],
      image: "/RestaurantReviewImage_ganz.png",
    },
    {
      title: "FoodTruck",
      description:
        "In FoodTruck betreibst du deinen eigenes Cozy Cafe. Kund:innen wollen Kuchen und Kaffee – du musst schnell servieren und die Nerven behalten. Ein charmantes Pixel-Art Game mit Herz und Humor!",
      tech: ["C#", "Unity"],
      image: "/FoodTruckImage.png",
    },
    {
      title: "Biersommelier",
      description:
        "Mit der App kannst du Trinklokale eintragen und Getränke bewerten. Ein Zufallsfeature schlägt dir neue Drinks vor – Login, Passwort-Reset und einige Features inklusive",
      tech: ["Tailwind", "Typescript", "Laravel"],
      image: "/biersommelierImage_ganz.png",
    },

    {
      title: "MoFitness",
      description:
        "Mo Fitness ist eine moderne Fitness-Webseite, die Nutzer:innen mitStandortsuche, Newsletter-Anmeldung und klarer Call-to-Action anspricht.",
      tech: ["PHP", "HTML", "CSS/Scss", "Jscript", "SQL", "Laravel"],
      image: "/MoFitnessImage.png",
    },
    // Weitere Projekte ...
  ];

  return (
    <section className="bg-black py-0 px-4">
      <Swiper
        spaceBetween={30}
        centeredSlides
        slidesPerView="auto"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-xl mx-auto"
      >
        {projects.map((proj, i) => (
          <SwiperSlide key={i} className="!w-[85vw] sm:!w-[400px]">
            <FlipCard project={proj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function FlipCard({ project }: { project: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1000px] h-[250px] relative w-full cursor-pointer touch-pan-y pb-10"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Vorderseite */}
        <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-4xl p-2"
          />
        </div>

        {/* Rückseite */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            {project.tech.map((t: string, idx: number) => (
              <span key={idx} className="text-[#0ea5e9] text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
