import { useInView } from "react-intersection-observer";
import icons from "../../public/tech-icons/iconsData";
import Game from "../../components/Game";
import Image from "next/image";
import profilePic from "../../public/yo.png";

const About = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      id="about"
      ref={section}
      className=" flex  min-h-screen justify-center bg-slate-50"
    >
      <div
        className={`flex max-w-[60rem] flex-col items-center justify-center gap-6 py-[12vh] px-4 transition-opacity duration-300 md:gap-12 ${
          sectionInView ? "opacity-110" : "opacity-0"
        }`}
      >
        <Image
          placeholder="blur"
          width="150px"
          height="150px"
          className="rounded-full"
          src={profilePic}
        ></Image>
        <div className="w-full text-center text-black sm:text-2xl">
          <p>
            I&apos;m Raúl Bonilla Lobo, a frontend web developer. I like
            building nice-looking and functional web applications. These are
            some of my skills:
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-evenly gap-4">
          {icons.map((icon) => (
            <a key={icon.id} href={icon.link} target="_blank" rel="noreferrer">
              <img
                src={icon.src}
                alt="skill icon"
                className="h-[35px]  transition-transform duration-300 hover:scale-125 sm:h-[70px]"
              />
            </a>
          ))}
        </div>
        <br></br>
        <p className="w-full text-center text-black sm:text-2xl">
          <span className=" font-extrabold">Know more about me</span> by playing
          this game!
        </p>

        <Game />
      </div>
    </div>
  );
};

export default About;
