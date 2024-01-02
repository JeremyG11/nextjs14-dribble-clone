"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function FooterScrolingCards() {
  const cardRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const ul = cardRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);

      const nextSiblingElement = ul.nextSibling as HTMLUListElement | null;

      if (nextSiblingElement) {
        nextSiblingElement.setAttribute("aria-hidden", "true");
      }
    }
  }, []);
  const cardData = [
    {
      name: "Illustrations",
      image:
        "https://images.unsplash.com/photo-1590176028506-b8324faaa8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRlc2lnbmVyfGVufDB8fDB8fHww",
    },
    {
      name: "Web Designs",
      image:
        "https://images.unsplash.com/photo-1590176028506-b8324faaa8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRlc2lnbmVyfGVufDB8fDB8fHww",
    },
    {
      name: "Animations",
      image:
        "https://images.unsplash.com/photo-1590176028506-b8324faaa8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRlc2lnbmVyfGVufDB8fDB8fHww",
    },
    {
      name: "Ledia Yohanis",
      image:
        "https://images.unsplash.com/photo-1590176028506-b8324faaa8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRlc2lnbmVyfGVufDB8fDB8fHww",
    },
  ];

  return (
    <>
      <div className="flex overflow-hidden group">
        <ul
          ref={cardRef}
          className="flex animate-infinite-scroll group-hover:paused md:justify-start [&_li]:mx-4 [&_img]:max-w-none"
        >
          {cardData.map((card, i) => (
            <li key={i} className="relative cursor-pointer">
              <div className="w-44 h-32 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt="card image"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-800 text-sm"> {card.name}</p>
            </li>
          ))}
        </ul>
        <ul
          ref={cardRef}
          className="flex animate-infinite-scroll group-hover:paused md:justify-start [&_li]:mx-4 [&_img]:max-w-none"
          aria-hidden="true"
        >
          {cardData.map((card, i) => (
            <li key={i} className="relative cursor-pointer">
              <div className="w-44 h-32 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt="card image"
                  className="object-cover w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
              <p className="mt-4 text-gray-800 text-sm"> {card.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
