"use client";

import React from "react";
import YouTube from "react-youtube";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  const videoOps = {
    height: "472",
    width: "840",
    playerVars: {
      autoplay: 0,
    },
  };
  const words = ["verifiable", "secure", "trustworthy", "private"];

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <BackgroundGradientAnimation>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6ls relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                On-Chain <br />
                <Cover>Zero-Knowledge Proof Framework</Cover>
                <br />
                for <FlipWords words={words} />Fact-Checking
              </h1>
            </div>
            {/* Hero image */}
            <div className="text-center pb-12 md:pb-16">
              <h4
                className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
                data-aos="zoom-y-out"
              >
                Watch the demo video below
              </h4>
              <div
                className="relative flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <YouTube videoId="Z3zUcAwOs1A" opts={videoOps} />
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
