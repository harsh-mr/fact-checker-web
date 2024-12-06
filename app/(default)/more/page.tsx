export const metadata = {
  title: "Fact Checker — More Information",
};

import Image from "next/image";
import Overview from "@/public/images/end-to-end-500.png";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Cover } from "@/components/ui/cover";

export default function More() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <BackgroundGradientAnimation>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6ls relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Learn more about Fact Checker
              </h1>
            </div>
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h4
                  className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
                  data-aos="zoom-y-out"
                >
                  An On-Chain Zero-Knowledge Proof Solution to Fact-Checking
                </h4>
                <p className="text-xl text-gray-200">
                  ZKP is mostly associated with blockchain technology, where it
                  enhances transaction privacy and scalability through rollups,
                  addressing the data inherent to the blockchain. Our approach
                  focuses on safeguarding the privacy of data external to the
                  blockchain, with the blockchain serving as publicly auditable
                  infrastructure to verify the validity of ZK proofs and track
                  how data access has been granted without revealing the data
                  itself.
                </p>
              </div>
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <p className="text-xl text-gray-200">
                  Fact Checker is a blockchain-based framework that uses
                  zero-knowledge proofs for trustworthy and private
                  fact-checking. It ensures trustworthy data handling and
                  computation by using proofs of data provenance and auditable
                  data access policies. This preserves sensitive data privacy
                  while ensuring accountability and transparency in data
                  handling. Additionally, our solution democratizes circuit
                  construction and deployment with a circuit compiler that
                  supports various data formats and source authentication, and
                  facilitates on-chain verification.
                </p>
              </div>
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <p className="text-xl text-gray-200">
                  Our framework provides a comprehensive solution that covers
                  the entire process from circuit generation to proof
                  generation, while facilitating collaboration among data
                  analysts, data providers, external verifiers, and policy
                  auditors. It ensures correct computation and data provenance
                  of generic statements on real-world data without revealing any
                  information about the data itself. Overall we provide a robust
                  mechanism for preserving sensitive information privacy while
                  leveraging blockchain technology's security and transparency.
                </p>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                data-aos="fade-right"
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="relative h-2/4 w-2/4 md:h-2/4 md:w-2/4">
                    <Image src={Overview} alt="Overview" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
