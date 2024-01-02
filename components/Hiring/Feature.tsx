import React from "react";
import Image from "next/image";
import { SlDiamond } from "react-icons/sl";
import { TbWorldShare } from "react-icons/tb";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";

import Badge from "../Reusable/Badge";

const FeatureSection = () => {
  return (
    <section className="text-gray-600 py-24">
      <h1 className="text-center text-3xl pb-16 font-semibold">
        Why brands choose Dribbble to hire design talent
      </h1>
      <div className="container px-5 pt-10  mx-auto flex flex-row-reverse flex-nowrap gap-x-20">
        <div className="relative w-1/2 h-96 rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5676679/pexels-photo-5676679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="block w-3/4 h-full object-fill rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {[
            {
              name: "WORLD-CLASS TALENT",
              icon: <SlDiamond className="text-2xl" />,
              bg: "bg-cyan-100",
              description:
                " From graphic design to UX/UI, our community is home to the world's leading designers and creative agencies.",
            },
            {
              name: "$0 PLACEMENT FEES",
              icon: <PiCurrencyCircleDollarLight className="text-3xl" />,
              bg: "bg-blue-100",
              description:
                "We make the hiring process as seamless and cost-effective as possible, so you can focus on building your business.",
            },
            ,
            {
              name: "GLOBAL REACH",
              icon: <TbWorldShare className="text-3xl" />,
              bg: "bg-purple-100",
              description:
                "With a network of designers spanning over 170 countries, we make it easy to find world-class talent, wherever you are in the world.",
            },
            ,
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 lg:items-start items-center space-y-4"
            >
              {item?.icon}
              <div className="flex-grow">
                <Badge
                  text={item?.name ?? ""}
                  className={`${item?.bg} rounded-none mx-0 px-0.5 p-0.5 text-black uppercase`}
                />
              </div>
              <p className="text-base font-normal leading-8">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
