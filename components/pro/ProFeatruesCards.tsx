import React from "react";

export default function ProFeatruesCards() {
  return (
    <div className="max-w-6xl mx-auto xl:pt-12">
      <div className="p-8 space-y-8 md:space-y-0 md:flex gap-10">
        <div className="bg-aqua-gradient p-10 rounded-3xl space-y-5 w-full md:w-1/2">
          <p className="text-lg">Grow your audience</p>
          <h2 className="text-4xl lg:text-5xl">Reach over 10M creatives</h2>
          <p className="text-lg">
            Showcase your work to a community of over 10 million creative
            professionals around the world.
          </p>
        </div>
        <div className="bg-rose-gradient p-10 rounded-3xl space-y-5 w-full md:w-1/2">
          <p className="text-lg">Get hired</p>
          <h2 className="text-4xl lg:text-5xl">Connect with over 1M brands</h2>
          <p className="text-lg">
            Engage with new clients, collaborators, and future employers
            actively searching for designers like you.
          </p>
        </div>
      </div>
    </div>
  );
}
