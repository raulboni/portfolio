import { useState } from "react";
import Image from "next/image";
import { projects } from "../public/projects/projectsData";

const ProjectsList = () => {
  return (
    <>
      {projects.map((p) => (
        <div
          key={p.title}
          className="flex w-full flex-col items-center justify-center gap-8 bg-slate-900 p-8 text-white"
        >
          <h2 className="w-full text-center font-mono text-xl tracking-wide sm:text-2xl">
            {p.title}
          </h2>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="w-[60%] text-start">
              <p className="hidden opacity-60 md:block">{p.description}</p>
              <br></br>
              {p.techs.map((p) => (
                <span className="pr-4 font-mono" key={p}>
                  {" "}
                  {p}
                </span>
              ))}
            </div>
            <Image
              alt="project image"
              src={p.img}
              height="250px"
              width="125px"
            ></Image>
          </div>

          <span className="flex w-full justify-end gap-2">
            {p.link && (
              <button>
                <a
                  className=" bg-slate-50 px-2 py-1 font-mono font-bold text-black hover:bg-black hover:text-slate-50"
                  target="_blank"
                  rel="noreferrer"
                  href={p.link}
                >
                  Project
                </a>
              </button>
            )}
            {p.github && (
              <button>
                <a
                  className=" bg-slate-50 px-2 py-1 font-mono font-bold text-black hover:bg-black hover:text-slate-50"
                  target="_blank"
                  rel="noreferrer"
                  href={p.github}
                >
                  Code
                </a>
              </button>
            )}
          </span>
        </div>
      ))}
    </>
  );
};

export default ProjectsList;
