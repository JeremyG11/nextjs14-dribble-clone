import React from "react";
import Logo from "../Reusable/Logo";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import FooterScrolingCards from "./FooterScrolingCards";

export default function Footer() {
  return (
    <footer className="bg-white py-10 overflow-hidden ">
      <div className="pb-10">
        <FooterScrolingCards />
      </div>
      <div className="space-y-6">
        <div className="relative flex items-center justify-between mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Logo />
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {[
              { title: "For designers", path: "#" },
              { title: "Hire talent", path: "#" },
              { title: "Inspirations", path: "#" },
              { title: "Advertising", path: "#" },
              { title: "Blog", path: "#" },
              { title: "About", path: "#" },
              { title: "Careers", path: "#" },
              { title: "Support", path: "#" },
            ].map((item, idx) => {
              return (
                <li key={idx} className="px-2 hover:text-gray-900">
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex justify-center gap-4">
            {[
              {
                path: "#",
                icon: <FaXTwitter className="text-xl" />,
              },
              {
                path: "#",
                icon: <FaFacebookSquare className="text-xl" />,
              },
              {
                path: "#",
                icon: <FaInstagram className="text-xl" />,
              },
              {
                path: "#",
                icon: <IoLogoPinterest className="text-xl" />,
              },
            ].map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href="/"
                    className="text-primary transition hover:text-gray-700/75"
                  >
                    {item?.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="py-6 pt-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:flex sm:justify-between sm:text-left px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-gray-500">
              <ul className="justify-center items-center space-y-6 md:flex md:space-x-4 md:space-y-0">
                <li className="text-gray-700 mx-2 hover:text-gray-900">
                  <p className="block text-sm font-normal">©2023 Dribbble</p>
                </li>

                {[
                  { title: "Terms", path: "#" },
                  { title: "Privacy", path: "#" },
                  { title: "Cookies", path: "#" },
                ].map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-gray-700 mx-2 hover:text-gray-900"
                    >
                      <Link
                        href={item.path}
                        className="block text-sm font-light"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-4 md:space-y-0">
              {[
                { title: "Jobs", path: "#" },
                { title: "Designers", path: "#" },
                { title: "Freelancers", path: "#" },
                { title: "Tags", path: "#" },
                { title: "Places", path: "#" },
                { title: "Resources", path: "#" },
              ].map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-700 mx-2 hover:text-gray-900"
                  >
                    <Link href={item.path} className="block text-sm font-light">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
