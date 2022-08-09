import Image from "next/image";
import { useEffect, useState } from "react";
const Landing = ({ offsetY }) => {
  const [starsPosition, setStarsPosition] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setStarsPosition((prev) => [
        {
          key: Math.random(),
          x: Math.ceil(Math.random() * 10),
          y: Math.ceil(Math.random() * 10),
        },
        ...prev,
      ]);
    }
  }, []);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden">
      <div className="absolute z-10 flex h-[100vh] w-screen flex-wrap justify-evenly bg-slate-900">
        {starsPosition.map((s) => (
          <div key={s.key} className="h-[10vh] w-[10vw]">
            <div
              className={`relative h-[2px] w-[2px] bg-slate-50`}
              style={{
                top: `${s.y}vh`,
                left: `${s.x}vw`,
                transform: `translateY(${offsetY * 1}px)`,
              }}
            ></div>
          </div>
        ))}
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
