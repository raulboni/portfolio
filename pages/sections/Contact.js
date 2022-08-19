import { useInView } from "react-intersection-observer";

import { useState } from "react";

const Contact = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.3,
  });

  const contactData = {
    email: "raulbonilla@outlook.com",
    linkedin: "https://www.linkedin.com/in/raul-bonilla-lobo",
    github: "https://github.com/raulboni",
    codepen: "https://codepen.io/raulboni-the-looper/",
  };

  return (
    <div
      id="contact"
      className=" flex min-h-screen items-center justify-center"
    >
      <div
        ref={section}
        className={` flex max-w-[60rem] flex-col gap-10 py-[12vh] transition-opacity duration-300 ${
          sectionInView ? "opacity-100" : "opacity-0"
        }
      }`}
      >
        <p className="text-center md:text-2xl">
          Send me an email to{" "}
          <a className="cursor-pointer" href="mailto:raulbonilla@outlook.com">
            raulbonilla@outlook
          </a>
        </p>

        <p className="text-center md:text-2xl">Find me on</p>
        <div className="flex justify-center gap-4">
          <a href={contactData.linkedin} target="_blank" rel="noreferrer">
            <img
              className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              src="/contact-icons/linkedin.png"
              alt="linkedin icon"
            ></img>
          </a>

          <a href={contactData.github} target="_blank" rel="noreferrer">
            <img
              className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              src="/contact-icons/github.png"
              alt="github icon"
            ></img>
          </a>
          <a href={contactData.codepen} target="_blank" rel="noreferrer">
            <img
              className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              src="/contact-icons/codepen.png"
              alt="codepen icon"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
