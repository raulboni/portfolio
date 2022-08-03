import Image from "next/image";
const Landing = ({ offsetY }) => {
  return (
    <section className="relative flex h-[100vh] flex-col overflow-hidden">
      <div className="absolute top-0 z-0 scale-[3] lg:scale-100">
        <Image
          width="2000px"
          height="2600px"
          src="/landing/sky2.jpg"
          alt="landing-background"
        ></Image>
      </div>

      <h1 className="z-20 mt-[30vh] text-center font-sans text-6xl font-bold text-slate-100 transition-opacity duration-300 lg:text-9xl">
        Raúl Bonilla
        <div className="mt-20 font-mono text-2xl font-thin text-slate-100 lg:text-6xl">
          &lt;Web Developer/&gt;
        </div>
      </h1>

      <div className="invisible absolute left-0 top-[50vh] z-20 lg:visible">
        <Image
          width="700px"
          height="700px"
          src="/landing/roofs.svg"
          alt="landing-background"
          style={{
            transform: `translateY(${offsetY * 0.09}vh)`,
          }}
        ></Image>
      </div>
      <div className="invisible absolute right-0 top-[70vh] z-10 lg:visible">
        <Image
          height="500px"
          width="1500px"
          src="/landing/skyline.svg"
          alt="landing-background"
          style={{
            transform: `translateY(${offsetY * 0.07}vh)`,
          }}
        ></Image>
      </div>
    </section>
  );
};

export default Landing;
