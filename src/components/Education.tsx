import React from "react";
import { EducationHistory } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Education
        </h2>
      </div>

      <>
        <ol className="group/list">
          {EducationHistory.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2"
                  aria-label={item.yearsActive}
                >
                  {item.yearsActive}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <>
                      <span
                        className="inline-flex items-baseline font-medium leading-tight group/link text-base"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{item.program}</span>
                      </span>
                    </>

                    <>
                      <div
                        className="text-slate-700 dark:text-slate-400"
                        aria-hidden="true"
                      >
                        {item.university}
                      </div>
                    </>
                  </h3>

                  <p className="mt-2 text-sm text-justify leading-normal text-slate-800 dark:text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </>
    </section>
  );
}
