import React from "react";
import YouTube from "react-youtube";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

export default function NoServer() {
  const videoOps = {
    height: "472",
    width: "840",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
      <div style={{ height: "100%", overflow: "scroll" }}>
        {/* Description */}
        <div className="text-center pb-12 md:pb-16">
          <h4
            className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
            data-aos="zoom-y-out"
          >
            The server is down.
          </h4>
          <h4
            className="text-xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
            data-aos="zoom-y-out"
          >
            You can still check out the code
            <Link
              href="https://github.com/harsh-mr/fact-checker-dapp"
              legacyBehavior={true}
            >
              <a className="text-blue-500 hover:text-blue-600"> on GitHub. </a>
            </Link>
          </h4>
        </div>

        <div className="text-center pb-12 md:pb-16">
          <h4
            className="text-xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
            data-aos="zoom-y-out"
          >
            Watch the demo video below
          </h4>
          <div
            className="relative flex justify-center mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <YouTube videoId="Z3zUcAwOs1A" opts={videoOps} />
          </div>
        </div>
      </div>
  );
}
