function Shop() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-7 p-4  mt-12 mb-12 container mx-auto px-5 lg:px-20 ">
        <div
          className="border bg-[url('/public/sofa.jpg')] bg-no-repeat bg-cover bg-center
           flex flex-col justify-start items-start p-8 h-[280px] lg:h-[500px]  "
        >
          <h3 className="text-gray-500 pb-2 font-semibold">#HOUSE</h3>
          <h2 className="font-semibold lg:text-3xl">
            Express Your Beautiful Life Through Furniture
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-9 ">
          <div className="border bg-[url('/public/watch.jpg')] py-8 px-10 bg-no-repeat bg-cover bg-center">
            <h3 className="text-gray-500 pb-2 font-medium">#Accessories</h3>
            <h2 className="font-semibold lg:text-3xl">
              Discover Our Accessories Collection
            </h2>
          </div>
          <div className="border bg-[url('/public/laptopImage.jpg')] p-10 bg-no-repeat bg-cover bg-center">
            <h3 className="text-gray-500 pb-2 font-semibold">#Office</h3>
            <h2 className="font-semibold lg:text-3xl">
              Make Your Workspace More Comfortable
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
