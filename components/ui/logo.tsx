import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/public/images/logo-svg.svg";
import { useRouter } from 'next/router';

export default function Logo() {
  // const { basePath } = useRouter();
  const basePath = process.env.BASE_PATH 
  return (
    <Link href="/" legacyBehavior>
      <a className="block" aria-label="Truthify">
        <Image src={`${basePath}/images/logo-svg.svg`} alt="Truthify Logo" width={60} height={40} />
      </a>
    </Link>
  );
}
