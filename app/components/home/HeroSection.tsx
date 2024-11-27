  'use client'


import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import users from "@/public/images/user.png";
import phone from "@/public/images/holding-phone.png";
import { storeLinks } from "@/app/data/storeLinks";
import Link from "next/link";

const HeroSection = () => {
  // Observer for left content
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Observer for phone image
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Animation for left content
  const leftAnimation = useSpring({
    opacity: leftInView ? 1 : 0,
    transform: leftInView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 200, friction: 15 },
  });

  // Animation for right content
  const rightAnimation = useSpring({
    opacity: rightInView ? 1 : 0,
    transform: rightInView ? "translateX(0)" : "translateX(50px)",
    config: { tension: 200, friction: 15 },
  });

  return (
    <div className="flex flex-col md:flex-row justify-between w-full px-[20px] lg:px-[60px] md:space-x-[45px]">
      {/* Left Content */}
      <animated.div
        ref={leftRef} // Attach observer
        style={leftAnimation} // Apply animation
        className="w-full md:w-1/2 flex flex-col justify-center space-y-4"
      >
        <div className="text-[28px] xs:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] leading-[32px] md:leading-[36px] xl:leading-[48px] font-[400] flex flex-col">
          <span className="">Discover a World of</span>{" "}
          <span className="text-radiance-red"> Sermon with Radiance</span>
          <span className="text-radiance-red"> App</span>
        </div>
        <div className="text-[16px] xs:text-[14px] font-[500] leading-[24px] text-radiance-gray w-full md:max-w-[563px]">
          Welcome to Radiance App, where spirituality meets modern convenience.
          Dive into a realm where sermons come alive with the tap of a screen,
          connecting hearts and minds to the power of faith anytime, anywhere.
        </div>
        <div className="flex pt-6 w-full justify-center lg:justify-normal gap-x-2 lg:gap-x-0">
          {storeLinks.map((store, index) => (
            <Link
              href={store.link}
              key={index}
              className="relative w-24 h-8 lg:w-32 lg:h-16 hover:scale-105 transform transition-all duration-300"
            >
              <Image
                src={store.src}
                alt={store.alt}
                fill
                className="md:object-contain"
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-16 flex items-center">
            <Image
              src={users}
              alt="Users Icon"
              priority
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span>2million+</span>
            <span> Radiance App users worldwide</span>
          </div>
        </div>
      </animated.div>

      {/* Phone Image */}
      <animated.div
        ref={rightRef} // Attach observer
        style={rightAnimation} // Apply animation
        className="w-full md:w-1/2 h-full mt-6 md:mt-0"
      >
        <Image
          src={phone}
          alt="Holding Phone"
          priority
          quality={100}
          className="object-contain"
        />
      </animated.div>
    </div>
  );
};

export default HeroSection;
