
import React from "react";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "AI-Powered Credit Assessment",
      description:
        "Leverage advanced AI algorithms for efficient and accurate credit evaluation.",
      icon: "🤖",
    },
    {
      title: "Cash Flow-Based Lending",
      description:
        "Access loans based on your business's cash flow, not just traditional credit scores.",
      icon: "💹",
    },
    {
      title: "OCEN Integration",
      description:
        "Seamlessly connect with multiple lenders through Open Credit Enablement Network.",
      icon: "🔗",
    },
    {
      title: "Financial Management Tools",
      description:
        "Optimize your finances with our suite of user-friendly management tools.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
