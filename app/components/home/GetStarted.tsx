"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { storeLinks } from "@/app/data/storeLinks";
import pngwing from "@/public/images/pngwing.png";

const GetStarted = () => {
  // Use Intersection Observer to trigger animation when element is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 10% of the element is visible
  });

  // Define spring animation using React Spring
  const animation = useSpring({
    opacity: inView ? 1 : 0, // Fade in/out
    transform: inView ? "translateY(0)" : "translateY(30px)", // Move up on scroll
    config: { tension: 200, friction: 15 }, // Physics-based animation config
  });

  return (
    <div className="w-full px-[20px] lg:px-[60px] mt-16">
      <animated.div
        ref={ref} // Attach the ref for intersection detection
        style={animation} // Apply spring animation to the div
        className="rounded-3xl h-56 md:h-64 xl:h-full w-full md:w-[90%] relative bg-radiance-red mx-auto"
      >
        <Image
          src={pngwing}
          alt="png"
          priority
          quality={100}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 lg:px-32 h-full gap-4 md:gap-y-8 xl:gap-y-10">
          {/* Animating the heading */}
          <animated.h1
            style={animation} // Apply animation to the heading
            className="font-bold text-[28px] xs:text-[18px] md:text-[36px] lg:text-[45px] xl:text-[52px] xs:leading-[30px] leading-[45px] xl:leading-[64px]"
          >
            Ready to get started?
          </animated.h1>
          {/* Animating the description text */}
          <animated.div
            style={animation} // Apply animation to the text
            className="xs:text-[12px] text-[14px] md:text-[20px] xl:text-[24px] font-[400] leading-[20px] md:leading-[24px] xl:leading-[32px]"
          >
            You have seen the process now. It&apos;s simple, fast and seamless
            to get onboarded, all in less than 2 minutes. Just download the app
            to get started.
          </animated.div>

          {/* Animating the store links */}
          <animated.div
            style={animation} // Apply animation to the button container
            className="flex gap-x-6"
          >
            {storeLinks.map((store, index) => (
              <Link
                href={store.link}
                key={index}
                className="relative w-28 h-9 xs:w-20 xs:h-6 lg:w-[200px] lg:h-[50px] hover:scale-105 transform transition-transform duration-300"
              >
                <Image
                  src={store.src}
                  alt={store.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 192px"
                />
              </Link>
            ))}
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};

export default GetStarted;
