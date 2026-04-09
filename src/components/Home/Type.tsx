import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Component-driven UIs",
          "Core Web Vitals & perf",
          "Accessible, semantic HTML",
          "Design systems & tokens",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
        delay: 48,
      }}
    />
  );
}

export default Type;
