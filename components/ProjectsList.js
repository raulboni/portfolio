import { useState } from "react";
import Image from "next/image";
import { projects } from "../public/projects/projectsData";

const ProjectsList = () => {
  return (
    <>
      {projects.map((p) => (
        <div
          key={p.title}
          className="flex h-[500px] w-full flex-col items-center justify-center gap-8 bg-slate-50 p-10 text-black sm:w-[500px]"
        >
          <h2 className="text-center text-xl">{p.title}</h2>
          <div className="flex w-full items-center justify-between gap-2">
            <p className="w-[60%]">{p.description}</p>
            <Image src={p.img} height="250px" width="125px"></Image>
          </div>
          <div className="w-full text-start font-mono">
            {p.techs.map((p) => (
              <span key={p}> {p}</span>
            ))}
          </div>
          <span className="flex w-full justify-center">
            <button>
              <a
                className=" bg-slate-50 px-2 py-1 font-mono font-bold text-black hover:bg-black hover:text-slate-50"
                target="_blank"
                href={p.link}
              >
                Project
              </a>
            </button>
            <button>
              <a
                className=" bg-slate-50 px-2 py-1 font-mono font-bold text-black hover:bg-black hover:text-slate-50"
                target="_blank"
                href={p.github}
              >
                Code
              </a>
            </button>
          </span>
        </div>
      ))}
    </>
  );
};

export default ProjectsList;
