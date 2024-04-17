import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About Me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="text-justify">
        <p className="mb-4">
          Since I was a kid, I&apos;ve had a deep interest in the digital world,
          especially through playing at internet cafes or &apos;<i>warnet</i>
          &apos; (warung internet in Indonesia). There, I spent time browsing
          and exploring various topics that interested me. From there, I began
          to learn about how data is displayed on websites and became interested
          in knowing more about the process behind the scenes.
        </p>

        <p className="mb-4">
          My interest in programming truly developed when I started digging into
          &apos;inspect element&apos; and understanding how a website is built
          from neatly arranged codes. This sparked my journey to start learning
          about the programming.
        </p>
      </div>
    </section>
  );
}
