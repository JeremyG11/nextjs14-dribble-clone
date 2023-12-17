"use client";
import React, { useEffect, useRef } from "react";

export const InfiniteScrollCards = () => {
  const cardRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const ul = cardRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);

      const nextSiblingElement = ul.nextSibling as HTMLElement | null;

      if (nextSiblingElement) {
        nextSiblingElement.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  const cardData = [
    {
      name: "Ledia Yohanis",
      media: {
        type: "video",
        src: "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
      },
      title: "Creative",
      skills: ["Web", "Mobile", "UI"],
    },
    {
      name: "Jeremiah Tap",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1574852859542-1b41217a7815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbmVyfGVufDB8fDB8fHww",
      },
      title: "Brand Designer",
      skills: ["Web", "UI", "Mobile", "Product"],
    },
    {
      name: "Hannah Tsefaye",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1550682290-d071c75759f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2lnbmVyfGVufDB8fDB8fHww",
      },
      title: "Web Developer",
      skills: ["Web", "UI", "Mobile"],
    },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap">
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll"
        ref={cardRef}
      >
        {cardData.map((card, i) => (
          <li
            key={i}
            className="relative  w-72 h-80 rounded-3xl overflow-hidden bg-black "
          >
            {card.media.type === "video" ? (
              <video className="object-cover w-full h-full" autoPlay loop muted>
                <source src={card.media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={card.media.src}
                className="object-cover w-full h-full"
              />
            )}

            <div className="absolute bottom-4 spacy-y-2 px-8 text-white">
              <div className="mb-2">
                <p className="font-medium">{card.name}</p>
                <p className="text-xs">{card.title}</p>
              </div>

              <div className="flex items-center">
                {card.skills.map((skill) => (
                  <button
                    key={skill}
                    className=" mr-2 p-1 px-2 rounded-full text-xs border text-white duration-150"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
