"use client";

import { useEffect, useState } from "react";
import TSParticles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { particleOptions } from "@/features/animated-tag/configs";

const Particles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <TSParticles
          id="tsparticles"
          className="w-full h-full"
          options={particleOptions}
        />
      </div>
    );
  }

  return <></>;
};

export default Particles;
