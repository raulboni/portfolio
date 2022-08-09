import { useInView } from "react-intersection-observer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Contact = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.3,
  });

  const contactData = {
    email: "raulbonilla@outlook.com",
    linkedin: "https://www.linkedin.com/in/raul-bonilla-lobo",
    github: "https://github.com/raulboni",
  };
  const [copiedMessage, setCopiedMessage] = useState(false);
  function handleClick() {
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 1000);
  }

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
          <CopyToClipboard text={contactData.email}>
            <span
              className={`cursor-pointer border-b-2 ${
                copiedMessage && "bg-slate-50 font-mono text-black"
              }`}
              onClick={handleClick}
            >
              {!copiedMessage ? contactData.email : "copied to clipboard"}
            </span>
          </CopyToClipboard>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
