function Hero() {
  return (
    <>
      <section className="bg-[url(src/assets/hero-bg.svg)] flex flex-col md:flex-row items-center justify-between p-6 container mx-auto px-5 lg:px-20">
        {/* INFO text  */}
        <div className="mt-9 p-4 font-monospace mb-9">
          <h3 className="text-blue-600 font-semibold text-xl pb-2">
            Start From $299
          </h3>
          <h1 className="text-2xl font-bold pb-2">
            Ultra HD Quality Bluetooth Sound Speakers
          </h1>
          <p className="text-gray-600 text-base pb-4 md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ornare vestibulum mollis. Nam vitae augue purus.
          </p>
          <div>
            <button className="rounded-full hover:bg-blue-800 px-5 py-2 text-lg font-semibold text-white bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <img
            src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/headers/header-03/image-01.jpg"
            alt="image of speaker"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
