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
        className={`flex flex-col items-center justify-center gap-8 py-[15vh] px-[15vw] transition-opacity duration-300 ${
          sectionInView ? "opacity-110" : "opacity-0"
        }`}
      >
        <p className="w-full text-black sm:text-lg">
          I'm Raúl Bonilla Lobo, a frontend web developer. I like building
          nice-looking and functional web applications that make the world a
          better place. These are some of my skills:
        </p>

        <div className="flex w-full flex-wrap justify-evenly gap-4">
          {icons.map((icon) => (
            <a key={icon.id} href={icon.link} target="_blank">
              <img
                src={icon.src}
                className="h-[35px]  transition-transform duration-300 hover:scale-125 sm:max-h-[60px]"
              />
            </a>
          ))}
        </div>
        <br></br>
        <p className="w-full text-black sm:text-lg">
          Play this memory game if you want to know more about me!
        </p>

        <Game />
      </div>
    </div>
  );
};

export default About;
