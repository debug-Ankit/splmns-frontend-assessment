import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const particleOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: false,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 200,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
