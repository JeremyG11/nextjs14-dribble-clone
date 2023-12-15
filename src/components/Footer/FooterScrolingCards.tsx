"use client";
import React, { useEffect, useRef } from "react";

export default function FooterScrolingCards() {
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
      image:
        "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    },
    {
      name: "Ledia Yohanis",
      image:
        "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    },
    {
      name: "Ledia Yohanis",
      image:
        "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    },
    {
      name: "Ledia Yohanis",
      image:
        "https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427",
    },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap">
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll"
        ref={cardRef}
      >
        {cardData.map((card, i) => (
          <li key={i} className="relative p-4 ">
            <div className="w-56 h-40 rounded-xl overflow-hidden">
              <img
                src={card.image}
                alt="card image"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="mt-4 text-gray-500"> {card.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
