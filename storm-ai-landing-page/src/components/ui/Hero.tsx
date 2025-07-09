const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Storm AI</h1>
        <p className="text-xl mb-10">
          Experience the future of AI-powered solutions.
        </p>
        <a
          href="#features"
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
