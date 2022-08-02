import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "../components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Landing from "./sections/Landing";
import Work from "./sections/Work";

export default function Home() {
  const { ref: landing, inView: landingInView } = useInView({
    rootMargin: "-100px",
    threshold: 0,
  });

  const { ref: work, inView: workInView } = useInView({
    rootMargin: "-100px",
    threshold: 0,
  });

  const { ref: about, inView: aboutInView } = useInView({
    rootMargin: "-100px",
    threshold: 0,
  });

  const { ref: contact, inView: contactInView } = useInView({
    rootMargin: "-100px",
    threshold: 0,
  });

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        landingInView={landingInView}
        workInView={workInView}
        aboutInView={aboutInView}
        contactInView={contactInView}
      />
      <div ref={landing}>
        <Landing offsetY={offsetY} />
      </div>
      <div ref={work}>
        <Work />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}
