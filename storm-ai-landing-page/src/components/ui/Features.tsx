interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-100 text-indigo-500 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  // Placeholder icons - replace with actual icons later
  const PlaceholderIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>;

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Storm AI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<PlaceholderIcon />}
            title="Intelligent Automation"
            description="Leverage AI to automate complex tasks and streamline your workflows."
          />
          <FeatureCard
            icon={<PlaceholderIcon />}
            title="Data-Driven Insights"
            description="Unlock valuable insights from your data to make smarter business decisions."
          />
          <FeatureCard
            icon={<PlaceholderIcon />}
            title="Scalable Solutions"
            description="Our platform is designed to scale with your business needs, ensuring long-term growth."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
