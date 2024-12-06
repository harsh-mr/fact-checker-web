import Head from "next/head";
import { Button, message, Steps, theme } from "antd";
import React, { useState } from "react";

import Owner from "./components/Owner";
import Hospital from "./components/Hospital";
import Verifier from "./components/Verifiers";
import demoPage from "./components/Demo";
import Demo from "./components/Demo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Cover } from "@/components/ui/cover";

export const metadata = {
  title: "Fact Checker — Demo",
};

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <BackgroundGradientAnimation>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6ls relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Demo on Fact Checker
              </h1>
            </div>
            <Demo />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
