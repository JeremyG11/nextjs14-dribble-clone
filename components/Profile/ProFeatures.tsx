import Link from "next/link";
import React from "react";
import { Button } from "../shared/Button";

export default function ProfFeatures() {
  return (
    <div className="space-y-8 border-t-2 border-dashed py-8">
      <Link href="" className="text-sm text-gray-500">
        Access the features below with Dribbble Pro
        <span className="bg-pink-500 uppercase mx-2 px-1 py-0.5 text-xs rounded text-white">
          Pro
        </span>
      </Link>
      <div className="flex items-center justify-between">
        <div className="space-y-2 text-sm">
          <p>Add to project</p>
          <p className=" text-gray-500">
            Collect and group related work together
          </p>
        </div>
        <Button className="cursor-not-allowed px-3 py-1 md:py-2.5 md:px-5 text-gray-400 text-sm font-semibold bg-gray-50">
          Choose project
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-2 text-sm">
          <p>Downloads</p>
          <p className=" text-gray-500">
            Share up to 5 layered files, brushes, and more
          </p>
        </div>
        <Button className="cursor-not-allowed px-3 py-1 md:py-2.5 md:px-5 text-gray-400 text-sm font-semibold bg-gray-50">
          Attach files
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-2 text-sm">
          <p>Schedule</p>
          <p className=" text-gray-500">
            Collect and group related work together
          </p>
        </div>
        <Button className="cursor-not-allowed px-3 py-1 md:py-2.5 md:px-5 text-gray-400 text-sm font-semibold bg-gray-50">
          Change{" "}
        </Button>
      </div>
    </div>
  );
}
