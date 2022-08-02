import { useInView } from "react-intersection-observer";
import ProjectsList from "../../components/ProjectsList";

const Work = () => {
  const { ref: section, inView: sectionInView } = useInView({
    threshold: 0.3,
  });

  return (
    <section id="work" className="min-h-screen">
      <div
        ref={section}
        className={`mx-0 flex flex-wrap items-center justify-center gap-4 py-40 px-0 transition-opacity duration-300 ${
          sectionInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProjectsList />
      </div>
    </section>
  );
};

export default Work;
