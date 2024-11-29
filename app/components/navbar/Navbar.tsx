"use client";

import Image from "next/image";
import React from "react";
import radianceLogo from "@/public/images/logo.png";
import { navbarLinks } from "@/app/data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantine/core/styles.css";

const Navbar = () => {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <div className="flex justify-between px-[20px] lg:px-[60px] bg-radiance-color py-2 border-b items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={radianceLogo}
            alt="Radiance Logo"
            priority
            quality={100}
            width={200} // Defined width
            height={50} // Defined height
            style={{ height: "auto" }} // Ensures aspect ratio is maintained
            className="object-contain"
          />
        </Link>
        {/* Image component with fixed aspect ratio */}
        {/* <Image
          src={radianceLogo}
          alt="Radiance Logo"
          priority
          quality={100}
          width={200} // Defined width
          height={50} // Defined height
          style={{
            width: "auto", // Let the width auto-adjust
            height: "auto", // Maintains aspect ratio
          }}
          className="object-contain"
        /> */}
      </div>

      {/* Burger menu for small screens */}
      <div className="md:hidden flex items-center">
        <Burger
          opened={opened}
          onClick={toggle}
          color="#fff"
          aria-label="Toggle navigation"
          lineSize={2}
          size="lg"
        />
      </div>

      <div className="hidden md:flex space-x-4">
        {navbarLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-[16px] font-poppins font-[500] leading-[24px] ${
              pathname === link.href ? "text-radiance-red" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div
        className={`${
          opened ? "block opened" : "closed"
        } md:hidden absolute top-16 left-0 w-full bg-radiance-color h-screen navbar-collapse z-50`}
      >
        <div className="flex flex-col items-center space-y-4 p-4">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => {
                // setSelectedLink(link.label); // Set selected link on click
                close();
              }}
              className={`text-[16px] font-poppins font-[500] leading-[24px] ${
                pathname === link.href ? "text-radiance-red" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
