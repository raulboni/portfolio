import { useInView } from "react-intersection-observer";
import ProjectsList from "../../components/ProjectsList";

const Work = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div id="work" className="z-30 flex min-h-screen justify-center">
      <div
        ref={section}
        className={`jusfity-center flex max-w-[60rem] flex-col gap-6 py-[12vh] px-4 transition-opacity duration-300 ${
          sectionInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProjectsList />
      </div>
    </div>
  );
};

export default Work;
