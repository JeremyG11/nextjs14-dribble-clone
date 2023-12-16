import React from "react";
import { Button } from "../Reusable/Button";

export default function JobBoard() {
  return (
    <section className="overflow-hidden xl:py-20 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            The #1 job board for top design talent{" "}
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Our job board postings receive an average of 1.1k targeted clicks
            per month and are viewed by over 1 million top designers globally.
            With a proven track record assisting over 60,000 companies, you’ll
            spend less time sorting through unqualified candidates and more time
            hiring amazing talent.
          </p>

          <div className="mt-4 md:mt-8">
            <Button styles="mt-8 block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-pink-700 focus:outline-none focus:ring active:text-pink-500">
              Vist the job board
            </Button>
          </div>
        </div>
      </div>

      {/* <img
        alt="Student"
        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover sm:h-full"
      /> */}
    </section>
  );
}
