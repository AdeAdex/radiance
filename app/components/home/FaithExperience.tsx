// import React from "react";
// import Image from "next/image";
// import midImage1 from "@/public/images/midImage1.png";
// import midImage2 from "@/public/images/midImage2.png";

// const FaithExperience = () => {
//   return (
//     <main className="w-full mt-16 flex flex-col md:flex-row items-center justify-between px-6 ">
//       <div className="relative w-full grid grid-cols-1 md:grid-cols-2">

//         {/* Text Content */}
//         <div className="bg-black/60 w-full absolute inset-0">
//         <div className="w-full h-full flex flex-col md:justify-center md:items-center md:w-[40%] mt-6 md:mt-0">
//             <h2 className="text-2xl xs:text-[18px] md:text-3xl sx:leading-[24px] xl:leading-[44px] font-semibold drop-shadow-lg">
//               Enjoy listening to your favorite preacher and sermon anywhere you
//               want
//             </h2>
//             <p className="text-sm md:text-base mt-4 text-gray-300 drop-shadow-lg">
//               Listen to an endless number of sermons on your iPhone, tablet, and
//               Android.  
//             </p>
//           </div>
//         </div>
        

//         {/* First Image with Text Overlay */}
          
//           {/* Image */}
//           <Image
//             src={midImage1}
//             alt="First Device"
//             className="object-contain h-auto w-full max-w-[300px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[480px] xxl:max-w-[540px]"
//             priority
//             quality={100}
//           />

//         {/* Second Image */}
//         <div>
//           <Image
//             src={midImage2}
//             alt="Second Device"
//             className="object-contain h-auto w-full max-w-[300px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[480px] xxl:max-w-[540px]"
//             priority
//             quality={100}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default FaithExperience;








import React from "react";
import Image from "next/image";
import midImage1 from "@/public/images/midImage1.png";
import midImage2 from "@/public/images/midImage2.png";

const FaithExperience = () => {
  return (
    <main className="w-full mt-16 flex flex-col md:flex-row items-center justify-center px-6">
      {/* Container for Images and Text */}
      <div className="relative flex flex-col md:flex-row items-center w-full md:w-[80%] lg:w-[70%]">
        
        {/* First Image with Text Overlay */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* First Image */}
          <Image
            src={midImage1}
            alt="First Device"
            className="object-fill  h-[430px] w-full "
            priority
            quality={100}
          />
          {/* Gradient Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10 flex flex-col justify-center items-start px-6">
            <h2 className="text-white text-2xl md:text-3xl ">
              Enjoy listening to your favorite preacher and sermon anywhere you want
            </h2>
            <p className="text-gray-300 text-sm md:text-base mt-4">
              Listen to an endless number of sermons on your iPhone, tablet, and Android.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src={midImage2}
            alt="Second Device"
            className="object-contain h-[313px] w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            priority
            quality={100}
          />
        </div>
      </div>
    </main>
  );
};

export default FaithExperience;
