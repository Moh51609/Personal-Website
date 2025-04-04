"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackgroundFog() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x1a1a19,
        midtoneColor: 0xe7e7e7,
        lowlightColor: 0x606060,
        baseColor: 0x0,
        blurFactor: 0.5,
        zoom: 1.0,
        speed: 1.0,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />
  );
}
