import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://facebook.com",
    ariaLabel: "Facebook",
    icon: <FaFacebookF className="text-white text-xl" />,
    bgColor: "bg-blue-500",
  },
  {
    href: "https://twitter.com",
    ariaLabel: "Twitter",
    icon: <FaTwitter className="text-white text-xl" />,
    bgColor: "bg-sky-400",
  },
  {
    href: "https://linkedin.com",
    ariaLabel: "LinkedIn",
    icon: <FaLinkedinIn className="text-white text-xl" />,
    bgColor: "bg-blue-700",
  },
  {
    href: "https://instagram.com",
    ariaLabel: "Instagram",
    icon: <FaInstagram className="text-white text-xl" />,
    bgColor: "bg-pink-500",
  },
];

const Footer = () => {
  return (
    <main className="bg-black pt-10 pb-4 px-[20px] lg:px-[60px]">
        <div className="flex flex-col md:flex-row space-y-4 pb-2 items-center md:gap-x-8">
          <p className="text-[10px] md:text-[16px] font-[400] lg:leading-[24px] text-center md:text-left w-full md:max-w-[360px]">
            Welcome to Radiance App, where spirituality meets modern
            convenience. Dive into a realm where sermons come alive with the tap
            of a screen, connecting hearts and minds to the power of faith
            anytime, anywhere.
          </p>

          <div className="flex space-x-4 my-auto">
            {socialLinks.map(({ href, ariaLabel, icon, bgColor }) => (
              <Link
                key={ariaLabel}
                href={href}
                aria-label={ariaLabel}
                className="hover:opacity-80"
              >
                <div className={`p-2 ${bgColor} rounded-full`}>{icon}</div>
              </Link>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-600 my-4" />
        <div className="py-4 text-center font-[400] text-[12px] font-poppins">
        © {new Date().getFullYear()}, All Right Reserved
        </div>
    </main>
  );
};

export default Footer;
