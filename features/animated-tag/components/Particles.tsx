"use client";

const Particles = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <video src="/particles.mp4" autoPlay loop />
    </div>
  );
};

export default Particles;
