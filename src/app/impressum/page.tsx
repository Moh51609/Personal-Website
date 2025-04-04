"use client";

import dynamic from "next/dynamic";
const VantaBackgroundFog = dynamic(() => import("../VantaBackgroundFog"), {
  ssr: false,
});
export default function Impressum() {
  return (
    <div className="relative w-full min-h-screen justify-center overflow-hidden flex">
      <div>
        <VantaBackgroundFog />
        <div
          className="absolute inset-0 backdrop-brightness-50 bg-white/10"
          id="home"
        ></div>
      </div>

      <div className="  relative z-10 px-6 py-12 text-white font-poppins  flex-col justify-center items-start min-h-screen inline-flex  mx-auto">
        <div className="text-xl sm:text-xl font-bold mb-2">Impressum</div>
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong>
        </p>
        <div className="">
          Mohamed Amri
          <br /> Dohrer Straße 217
          <br /> 41238 Mönchengladbach
        </div>
        <div>
          <strong>Kontakt:</strong>
          <br />
          E-Mail: mohamed.amri01@yahoo.de
          <br />
          Telefon: +49 163 2314692
        </div>
      </div>
    </div>
  );
}
