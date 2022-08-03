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
    <div id="contact" className=" min-h-screen ">
      <div
        ref={section}
        className={`flex flex-col items-center justify-center gap-10 p-10 py-40 px-20 transition-opacity duration-300 ${
          sectionInView ? "opacity-100" : "opacity-0"
        }
      }`}
      >
        <p className="text-center">
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
        <p className="text-center">Find me on</p>
        <div className="flex gap-4">
          <a href={contactData.linkedin} target="_blank">
            <img
              className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              src="/contact-icons/linkedin.png"
            ></img>
          </a>

          <a href={contactData.github} target="_blank">
            <img
              className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              src="/contact-icons/github.png"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;