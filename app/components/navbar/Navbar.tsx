'use client'

import Image from "next/image";
import React from "react";
import radiantLogo from "@/public/images/logo.png";
import { navbarLinks } from "@/app/data/navbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); 
  return (
    <div className="flex justify-between px-[20px] lg:px-[60px] bg-radiant-color py-2 border-b items-center">
      <div className="flex items-center">
        <Image
          src={radiantLogo}
          alt="radiant"
          priority
          quality={100}
          width={200} // Adjust the width as needed
          height={50} // Adjust the height as needed
          className="object-contain"
        />
      </div>
      <div className="hidden lg:flex space-x-4">
        {navbarLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-[16px] font-poppins font-[500] leading-[24px] ${
              pathname === link.href ? "text-radiant-red" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
