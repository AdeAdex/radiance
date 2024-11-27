import React from "react";
import stats1 from "@/public/images/IOS Users.png";
import stats2 from "@/public/images/Android User.png";
import stats3 from "@/public/images/Rating.png";
import Image from "next/image";

const statsImages = [stats1, stats2, stats3];

const Stats = () => {
  return (
    <div className="bg-radiance-red mt-[30px] py-2">
      <div className="container mx-auto flex justify-around">
        {statsImages.map((stat, idx) => (
          <div
            key={idx}
            className=" flex flex-col relative w-16 h-16 md:w-28 md:h-28"
          >
            <Image
              src={stat}
              alt={`stats ${idx}`}
              fill
              priority
              quality={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
