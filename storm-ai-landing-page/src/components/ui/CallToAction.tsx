const CallToAction = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-10">
          Join Storm AI today and revolutionize your business.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
