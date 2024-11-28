"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { storeLinks } from "@/app/data/storeLinks";
import pngwing from "@/public/images/pngwing.png";

const GetStarted = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, 
  });

  return (
    <div className="w-full px-[20px] lg:px-[60px] mt-16">
      <div
        ref={ref}
        className={`rounded-3xl h-56 md:h-64 xl:h-full w-full md:w-[90%] relative bg-radiance-red mx-auto ${
          inView ? "animate-slide-in-from-bottom" : "opacity-0"
        }`}
      >
        <Image
          src={pngwing}
          alt="png"
          priority
          quality={100}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 lg:px-32 h-full gap-4 md:gap-y-8 xl:gap-y-10">
          <h1 className="font-bold text-[28px] xs:text-[18px] md:text-[36px] lg:text-[45px] xl:text-[52px] xs:leading-[30px] leading-[45px] xl:leading-[64px]">
            Ready to get started?
          </h1>
          <div className="xs:text-[12px] text-[14px] md:text-[20px] xl:text-[24px] font-[400] leading-[20px] md:leading-[24px] xl:leading-[32px]">
            You have seen the process now. It&apos;s simple, fast and seamless
            to get onboarded, all in less than 2 minutes. Just download the app
            to get started.
          </div>

          <div className="flex gap-x-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
