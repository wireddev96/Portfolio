import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <>
      {/*@ts-ignore*/}
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 48,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              direction: "none",
              speed: 0.08,
              random: true,
            },
            size: {
              value: 1,
            },
            opacity: {
              value: 0.35,
              anim: {
                enable: true,
                speed: 0.4,
                opacity_min: 0.08,
                sync: false,
              },
            },
            color: {
              value: "#38bdf8",
            },
          },
          interactivity: {
            events: {
              onclick: { enable: false },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
}

export default Particle;
