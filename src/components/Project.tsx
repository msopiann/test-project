import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectPortfolio } from "@/lib/data";

export default function Project() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My Project"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Project
        </h2>
      </div>

      <>
        <ul className="group/list">
          {ProjectPortfolio.map((item: any) => (
            <li className="mb-12" key={item.projectId}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      href={item.projectUrl}
                      target="_blank"
                      className="inline-flex items-baseline font-medium leading-tight text-black dark:text-slate-200 focus-visible:text-teal-300  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                      <span>
                        {item.projectName}
                        <span className="inline-block">
                          <svg
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-justify">
                    {item.projectDescription}
                  </p>

                  <ul className="mt-2 flex flex-wrap" aria-label="Tech stack">
                    {item.techStack.map((tech: string, index: number) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-black dark:text-teal-300 ">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  src={item.projectImage}
                  width="200"
                  height="48"
                  alt={item.projectName}
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </li>
          ))}
        </ul>
      </>
    </section>
  );
}
