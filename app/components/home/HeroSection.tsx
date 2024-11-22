import Image from "next/image";
import React from "react";
import googleIcon from "@/public/images/google.png";
import appleIcon from "@/public/images/apple.png";
import users from "@/public/images/user.png";
import phone from "@/public/images/holding-phone.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-[20px] md:px-[60px] space-x-[45px]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
        <div className="text-[28px] md:text-[45px] leading-[32px] md:leading-[48px] font-[400] flex flex-col">
          <span className="">Discover a World of</span>{" "}
          <span className="text-radiant-red"> Sermon with Radiance</span>
          <span className="text-radiant-red"> App</span>
        </div>
        <div className="text-[16px] font-[500] leading-[24px] max-w-[563px]">
          Welcome to Radiance App, where spirituality meets modern convenience.
          Dive into a realm where sermons come alive with the tap of a screen,
          connecting hearts and minds to the power of faith anytime, anywhere.
        </div>
        <div className="flex space-x-4 pt-6 w-full justify-center md:justify-normal">
          <Image src={googleIcon} alt="Google Icon" />
          <Image src={appleIcon} alt="Apple Icon" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-16 flex items-center">
            <Image
              src={users}
              alt="Users Icon"
              priority
              quality={100}
              className="object-contain my-auto"
            />
          </div>

          <div className="flex flex-col">
            <span>2million+</span>
            <span> Radiance App users worldwide</span>
          </div>
        </div>
      </div>

      {/* Phone Image */}
      <div className="w-full md:w-1/2 h-full mt-6 md:mt-0">
        <Image
          src={phone}
          alt="Holding Phone"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
