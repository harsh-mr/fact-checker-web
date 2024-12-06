"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../lib/utils";
import { useAccount } from "wagmi"
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative w-full h-0">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { isConnected } = useAccount();

  return (
    <div
      className={cn("z-50", className)} // Adjusted width
    >
      <Menu setActive={setActive}>
        <Link href="/" className="cursor-pointer mr-auto">
          <MenuItem
            setActive={setActive}
            active={null}
            item="Home"
          ></MenuItem>
        </Link>
        <w3m-button/>
        <w3m-network-button/>
        <MenuItem setActive={setActive} active={active} item="Demo">
          <div className="text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="Demo"
              href="/demo"
              src="https://storage.googleapis.com/media-newsinitiative/images/GoogleFactCheckTools.original.jpg"
              description="Demo the Fact Checker Dapp"
            />
            <ProductItem
              title="Dapp"
              href="https://github.com/harsh-mr/fact-checker-dapp"
              src="https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?resize=1200%2C630"
              description="Checkout the Fact Checker Dapp Codebase"
            />
            <ProductItem
              title="Frontend"
              href="https://github.com/harsh-mr/fact-checker-web"
              src="https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?resize=1200%2C630"
              description="Checkout the Fact Checker Web Codebase"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Docs">
          <div className="flex flex-col space-y-4 text-md">
            <HoveredLink href="/more">Learn More</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
