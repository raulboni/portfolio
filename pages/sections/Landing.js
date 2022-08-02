const Landing = ({ offsetY }) => {
  return (
    <section className="relative flex h-[100vh] flex-col overflow-hidden">
      <img
        src="/landing/sky.jpg"
        alt="landing-background"
        className="absolute top-0 z-0 min-h-screen object-cover"
        style={{
          transform: `translateY(${offsetY * 1}px)`,
        }}
      />

      <h1 className="z-10 mt-[30vh] text-center font-sans text-6xl font-bold text-slate-100 transition-opacity duration-300 lg:text-9xl">
        Raúl Bonilla
        <div className="mt-20 font-mono text-2xl font-thin text-slate-100 lg:text-6xl">
          &lt;Web Developer/&gt;
        </div>
      </h1>

      <img
        src="/landing/roofs.svg"
        alt="landing-background"
        className="absolute top-[70vh] left-0 z-20 min-h-[400px] "
        style={{
          transform: `translateY(${offsetY * 0.6}px)`,
        }}
      />
      <img
        src="/landing/skyline.svg"
        alt="landing-background"
        className="absolute top-[80vh] right-0 z-10  min-h-[400px] object-cover"
        style={{
          transform: `translateY(${offsetY * 0.8}px)`,
        }}
      />
    </section>
  );
};

export default Landing;
