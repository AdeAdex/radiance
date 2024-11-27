import React from "react";
import ServicesCard from "./ServicesCard";
import servicesData from "@/app/data/services";

const Services = () => {
  return (
    <main className="text-center mt-[50px] px-[20px] lg:px-[60px] mt-20 md:mt-28">
      <div className="max-w-[1168px] mx-auto">
        <h1 className="mb-[20px] font-[400] text-[20px] md:text-[36px] md:leading-[40px] xl:leading-[44px]">
          Enhance Your Journey Of Faith with Radiance
        </h1>
        <div className="text-radiance-gray text-[16px] xs:text-[14px] md:leading-[24px] ">
          In a world bustling with distractions, find solace in our serene
          sanctuary of digital enlightenment. Whether you&apos;re seeking
          guidance on a Sunday morning, craving inspiration on a busy weekday,
          or simply yearning for a moment of reflection, Radiance App is your
          faithful companion on the journey of faith.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-5">
        {servicesData.map((data) => (
          <ServicesCard key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
};

export default Services;
