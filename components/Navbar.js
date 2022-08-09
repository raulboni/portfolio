import { Link } from "react-scroll";

const Navbar = ({ workInView, aboutInView, contactInView, landingInView }) => {
  return (
    <nav
      className={`fixed inset-x-0 z-50 flex justify-center gap-5 p-6 font-mono text-lg sm:text-3xl
        ${workInView && !landingInView ? " bg-black" : "bg-transparent"}
        ${aboutInView && !workInView ? "bg-slate-100 text-black" : ""}
        `}
    >
      <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
        <p
          className={`cursor-pointer border-slate-500 pb-1 ${
            !landingInView && workInView ? "border-b-2 " : "hover:border-b-2"
          } `}
        >
          Work
        </p>
      </Link>

      <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
        <p
          className={`cursor-pointer border-slate-500 pb-1 ${
            !workInView && aboutInView ? "border-b-2 " : "hover:border-b-2"
          } `}
        >
          About
        </p>
      </Link>

      <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
        <p
          className={`cursor-pointer border-slate-500 pb-1 ${
            !aboutInView && contactInView ? "border-b-2 " : "hover:border-b-2"
          } `}
        >
          Contact
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
