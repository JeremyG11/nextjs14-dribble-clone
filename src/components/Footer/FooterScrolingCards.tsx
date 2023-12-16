"use client";
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
    <div className="w-full inline-flex flex-nowrap">
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll"
        ref={cardRef}
      >
        {cardData.map((card, i) => (
          <li key={i} className="relative p-4 ">
            <div className="w-44 h-32 rounded-xl overflow-hidden">
              <img
                src={card.image}
                alt="card image"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-gray-800 text-sm"> {card.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
