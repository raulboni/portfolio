import { useInView } from "react-intersection-observer";
import icons from "../../public/tech-icons/iconsData";
import Game from "../../components/Game";

const About = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.2,
  });

  return (
    <div id="about" ref={section} className=" min-h-screen  bg-slate-50 ">
      <div
        ref={section}
        className={`flex flex-col items-center justify-center gap-16 py-40 px-20 transition-opacity duration-300 ${
          sectionInView ? "opacity-110" : "opacity-0"
        }`}
      >
        <p className="text-center text-black sm:text-xl">
          I'm Raúl Bonilla Lobo, a frontend web developer. These are my skills:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon) => (
            <a key={icon.id} href={icon.link} target="_blank">
              <img
                src={icon.src}
                className="max-h-[40px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              />
            </a>
          ))}
        </div>

        <Game />
      </div>
    </div>
  );
};

export default About;
