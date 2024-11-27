'use client'



import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

interface ServicesCardProp {
  data: {
    icon: string;
    title: string;
    description: string;
  };
}

const ServicesCard: React.FC<ServicesCardProp> = ({ data }) => {
  const { icon, title, description } = data;

  // Use Intersection Observer to detect when the card is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.2,    // Triggers when 20% of the card is visible
  });

  // Define animation using React Spring
  const animation = useSpring({
    opacity: inView ? 1 : 0, // Fade in
    transform: inView ? "scale(1)" : "scale(0.9)", // Scale up
    config: { tension: 250, friction: 20 }, // Smooth spring effect
  });

  return (
    <animated.div
      ref={ref} // Attach ref for visibility detection
      style={animation} // Apply animation styles
      className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-radiance-hover-color hover: rounded-lg"
    >
      <div className="mx-auto mb-2 w-[80px] h-[80px] relative">
        <Image
          src={icon}
          alt={title}
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h2 className="font-[400] text-[16px] xs:text-[14px] xl:text-[24px] mb-2 lg:leading-[32px] hover:text-blue-500 transition-colors duration-300">
        {title}
      </h2>
      <div className="text-[14px] xs:text-[12px] text-radiance-gray">
        {description}
      </div>
    </animated.div>
  );
};

export default ServicesCard;
