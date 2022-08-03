import { useState } from "react";
import Image from "next/image";
import { projects } from "../public/projects/projectsData";

const ProjectsList = () => {
  return (
    <>
      {projects.map((p) => (
        <div
          key={p.title}
          className="flex h-[480px] w-full flex-col items-center justify-center gap-8 bg-slate-900 p-8 text-white sm:w-[500px]"
        >
          <h2 className="w-full font-mono text-xl tracking-wide sm:text-2xl">
            {p.title}
          </h2>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="w-[60%] text-start">
              <p className="opacity-60">{p.description}</p>
              <br></br>
              {p.techs.map((p) => (
                <span className="pr-4 font-mono" key={p}>
                  {" "}
                  {p}
                </span>
              ))}
            </div>
            <Image
              className="shadow-2xl"
              src={p.img}
              height="250px"
              width="125px"
            ></Image>
          </div>

          <span className="flex w-full justify-end gap-2">
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
