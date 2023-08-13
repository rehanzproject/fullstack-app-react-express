function Subscribe() {
  return (
    <section id="subscribe">
      <div className="bg-[url('./assets/subscribe.png')] bg-cover bg-center flex">
        <div className="bg-black/80 md:p-16">
          <div className="p-4 md:p-10">
            <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
              Subscribe to Our Letters
            </h1>{" "}
            <p className="text-white py-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae dolores repudiandae labore esse laborum architecto
              consectetur, officia totam odit doloribus facere possimus nulla
              illo, quae praesentium dolor fuga voluptas soluta.
            </p>
            <input
              type="text"
              name=""
              id=""
              className="rounded-full p-2 px-10 w-full md:w-1/2"
              placeholder="Please enter your email address"
            />
            <button className="rounded-full bg-success-10 p-2 my-2 md:my-0 text-white w-full md:w-auto md:mx-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
