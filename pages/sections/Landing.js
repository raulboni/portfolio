import Image from "next/image";
const Landing = ({ offsetY }) => {
  console.log(offsetY);
  return (
    <section className="relative flex h-screen flex-col overflow-hidden">
      <div className="absolute z-10 h-[100vh] w-[100vw]">
        <Image
          placeholder={() => <div style={{ backgroundColor: "black" }} />}
          width="1931px"
          height="3433px"
          src="/landing/sky16-9.jpg"
          alt="landing-background"
          style={{
            transform: `translateY(${offsetY * 1}px)`,
          }}
        ></Image>
      </div>

      <h1 className="z-20 mt-[30vh] text-center font-sans text-4xl font-bold text-slate-100 transition-opacity duration-300 md:text-8xl">
        Raúl Bonilla
        <div className="mt-20 font-mono text-3xl font-thin text-slate-100 md:text-6xl">
          &lt;Web Developer/&gt;
        </div>
      </h1>

      <div className="invisible absolute top-56 z-20 flex h-screen w-screen flex-col justify-end lg:visible">
        <div className="">
          <Image
            width="800px"
            height="700px"
            src="/landing/roofs.svg"
            alt="landing-background"
            style={{
              transform: `translateY(${offsetY * 0.6}px)`,
            }}
          ></Image>
        </div>
      </div>
      <div className="invisible absolute top-44 z-10 flex h-screen w-screen flex-col justify-end lg:visible">
        <div>
          <Image
            height="800px"
            width="3000px"
            src="/landing/skyline.svg"
            alt="landing-background"
            style={{
              transform: `translateY(${offsetY * 0.8}px)`,
            }}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Landing;
