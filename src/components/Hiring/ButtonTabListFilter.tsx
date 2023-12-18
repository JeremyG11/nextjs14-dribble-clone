"use client";
import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { MdDone } from "react-icons/md";

import DropDownButton from "../Reusable/DropDownButton";
import { Button } from "../Reusable/Button";

export default function ButtonTabListFilter() {
  const [isOpened, setIsOpened] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [timeframe, setTimeframe] = useState("Now");

  const handleDropdown = () => {};
  return (
    <section className="px-14">
      <div className="flex">
        <DropDownButton
          title="Popular"
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          className="flex items-center justify-between border text-gray-600 p-2.5 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
        />
        <div className="mx-10 hide-scroll-bar .hide-scroll-bar w-full inline-flex flex-nowrap overflow-x-auto">
          <div className="px-5 w-full flex items-center justify-center md:justify-start [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
            <ul className="px-5 w-full flex items-center justify-between ">
              {[
                { id: "0", title: "Now" },
                { id: "1", title: "This Past week" },
                { id: "2", title: "All Time " },
                { id: "3", title: "This Past Month" },
                { id: "4", title: "This Past Year" },
              ].map((item) => (
                <li
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTimeframe(item.title);
                    setIsDetailsOpen(false);
                  }}
                  className={` flex justify-between rounded-full items-center  cursor-pointer ${
                    item.title === timeframe ? "bg-gray-200 p-2" : "text-sm"
                  }`}
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center text-sm font-medium p-2 px-6 border text-gray-900 rounded-full"
        >
          <BiFilter className="text-2xl" />
          <p className="font-normal">Filters</p>
        </Button>
      </div>
      {isFilterOpen ? (
        <div className="grid grid-cols-3 gap-x-10 mt-10">
          <div className="space-y-1">
            <h1>Tags</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-lg outline-none  hover:ring hover:border-pink-300 hover:ring-pink-100 focus:border-pink-300 group-hover:focus:ring-pink-100 group-hover:focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40 "
                />
              </div>
            </form>
          </div>
          <div className="space-y-1">
            <h1>Color</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-lg outline-none  hover:ring hover:border-pink-300 hover:ring-pink-100 focus:border-pink-300 group-hover:focus:ring-pink-100 group-hover:focus:border-pink-300 focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-40 "
                />
              </div>
            </form>
          </div>
          <div className="space-y-1">
            <h1>Timeframe</h1>
            <div className="relative inline-block w-full">
              <DropDownButton
                title={`${timeframe}`}
                isOpened={isDetailsOpen}
                setIsOpened={setIsDetailsOpen}
                className="flex w-full items-center justify-between border text-gray-600 p-3 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
              />
              {isDetailsOpen && (
                <div className="z-50 absolute w-full p-3 left-0 mt-2 rounded-lg border border-gray-100 bg-white ">
                  <ul className="space-y-5 text-sm">
                    {[
                      { id: "0", title: "Now" },
                      { id: "1", title: "This Past week" },
                      { id: "2", title: "All Time " },
                      { id: "3", title: "This Past Month" },
                      { id: "4", title: "This Past Year" },
                    ].map((item) => (
                      <li
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeframe(item.title);
                          setIsDetailsOpen(false);
                        }}
                        className={` flex justify-between items-center rounded cursor-pointer ${
                          item.title === timeframe
                            ? "bg-gray-200 p-2"
                            : "text-sm"
                        }`}
                      >
                        <p>{item.title}</p>{" "}
                        {timeframe === item.title && <MdDone />}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
