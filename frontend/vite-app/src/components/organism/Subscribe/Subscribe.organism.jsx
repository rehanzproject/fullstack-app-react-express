function Subscribe() {
  return (
    <section id="subscribe" className="bg-black opaci">
      <div className="md:px-16 bg-[url('./assets/subscribe.png')] bg-cover bg-center opacity-70  w-full">
      <div className=" ">
        <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
          Subscribe to Our Letters
        </h1>{" "}
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          dolores repudiandae labore esse laborum architecto consectetur,
          officia totam odit doloribus facere possimus nulla illo, quae
          praesentium dolor fuga voluptas soluta.
        </p>
        <input type="text" name="" id="" className="rounded-full py-2 pr-24" placeholder='Please enter your email address' />
        <button className="rounded-full bg-success-10 p-2 text-white">Subscribe</button>
      </div>
    </div>
    </section>
    
  );
}

export default Subscribe;
