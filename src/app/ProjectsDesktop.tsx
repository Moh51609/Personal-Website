"use client";
import { useState } from "react";

export default function ProjectsDesktop() {
  const [flippedStates, setFlippedStates] = useState(Array(5).fill(false));

  const toggleFlip = (index: number) => {
    const updated = [...flippedStates];
    updated[index] = !updated[index];
    setFlippedStates(updated);
  };
  return (
    <div className="flex md:flex-wrap justify-center snap-x snap-mandatory items-center mx-auto max-w-7xl gap-15 overflow-y-hidden py-8 snap-center ">
      <div className="group [perspective:1000px] h-55 relative snap-center shrink-0 w-[85vw] sm:w-1/2 md:w-80">
        <div
          onClick={() => toggleFlip(0)}
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
      group-hover:[transform:rotateY(180deg)] 
      ${flippedStates[0] ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a]">
            <img
              src="/PersonalWebsiteImage.png"
              alt="PersonalWebsiteImage"
              className="w-full h-full object-cover rounded-4xl p-2"
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Personal Website</h3>
            <p className="text-sm mb-5">
              Moderne Portfolio-Website zur Präsentation meiner Arbeiten.
              Entwickelt mit Fokus auf Design und Benutzerfreundlichkeit.
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-[#0ea5e9] text-xs">Tailwind</p>
              <p className="text-[#0ea5e9] text-xs">Typescript</p>
              <p className="text-[#0ea5e9] text-xs">NodeJS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="group [perspective:1000px] h-55 relative snap-center shrink-0 w-[85vw] sm:w-1/2 md:w-80">
        <div
          onClick={() => toggleFlip(1)}
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
      group-hover:[transform:rotateY(180deg)] 
      ${flippedStates[1] ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a]">
            <img
              src="/RestaurantReviewImage_ganz.png"
              alt="RestaurantReviewImage"
              className="w-full h-full object-cover rounded-4xl p-2"
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold mb-2">BiteNote</h3>
            <p className="text-sm mb-5">
              Benutzerfreundliche App zum Tracken von Restaurantbesuchen. Mit
              Datenbankanbindung, Login als auch Regsiter Funktionen und
              detailliertem Eintragen von Restaurant Erfahrungen
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-[#0ea5e9] text-xs">Flutter</p>
              <p className="text-[#0ea5e9] text-xs">Dart</p>
              <p className="text-[#0ea5e9] text-xs">SQL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="group [perspective:1000px] h-55 relative snap-center shrink-0 w-[85vw] sm:w-1/2 md:w-80">
        <div
          onClick={() => toggleFlip(2)}
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
      group-hover:[transform:rotateY(180deg)] 
      ${flippedStates[2] ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a]">
            <img
              src="/FoodTruckImage.png"
              alt="FoodTruckImage"
              className="w-full h-full object-cover rounded-4xl p-2"
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold mb-2">FoodTruck</h3>
            <p className="text-sm mb-5">
              In „FoodTruck" betreibst du deinen eigenes "Cozy Cafe". Kund:innen
              wollen Kuchen und Kaffee – du musst schnell servieren und die
              Nerven behalten. Ein charmantes Pixel-Art Game mit Herz und Humor!
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-[#0ea5e9] text-xs">C#</p>
              <p className="text-[#0ea5e9] text-xs">Unity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="group [perspective:1000px]  h-55 relative snap-center shrink-0 w-[85vw] sm:w-1/2 md:w-80">
        <div
          onClick={() => toggleFlip(3)}
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
      group-hover:[transform:rotateY(180deg)] 
      ${flippedStates[3] ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a]">
            <img
              src="/biersommelierImage_ganz.png"
              alt="biersommelierImage"
              className="w-full h-full object-cover rounded-4xl p-2"
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Biersommelier</h3>
            <p className="text-sm mb-5">
              Mit der App kannst du Trinklokale eintragen und Getränke bewerten.
              Ein Zufallsfeature schlägt dir neue Drinks vor – Login,
              Passwort-Reset und einige Features inklusive
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-[#0ea5e9] text-xs">Tailwind</p>
              <p className="text-[#0ea5e9] text-xs">Typescript</p>
              <p className="text-[#0ea5e9] text-xs">Laravel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="group [perspective:1000px] h-55 relative snap-center shrink-0 w-[85vw] sm:w-1/2 md:w-80">
        <div
          onClick={() => toggleFlip(4)}
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] 
      group-hover:[transform:rotateY(180deg)] 
      ${flippedStates[4] ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a]">
            <img
              src="/MoFitnessImage.png"
              alt="MoFitnessImage"
              className="w-full h-full object-cover rounded-4xl p-2"
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-4xl border-2 border-[#1b1b1b] bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Mo Fitness</h3>
            <p className="text-sm mb-5">
              Mo Fitness ist eine moderne Fitness-Webseite, die Nutzer:innen mit
              Standortsuche, Newsletter-Anmeldung und klarer Call-to-Action
              anspricht.
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-[#0ea5e9] text-xs">PHP</p>
              <p className="text-[#0ea5e9] text-xs">HTML</p>
              <p className="text-[#0ea5e9] text-xs">Css/Scss</p>
              <p className="text-[#0ea5e9] text-xs">Jscript</p>
              <p className="text-[#0ea5e9] text-xs">SQL</p>
              <p className="text-[#0ea5e9] text-xs">Laravel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
