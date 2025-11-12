import React from "react";

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on all US order or order above $200",
    },
    {
      id: 2,
      icon: "💬",
      title: "24x7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
    },
    {
      id: 3,
      icon: "🔄",
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Payment Secure",
      description: "Secure payment processing available 24/7",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 ">
      {features.map((feature) => (
        <div
          key={feature.id}
          className=" text-center p-6 rounded-2xl group bg-gray-100 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300"
        >
          <div className="w-14 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
            <span className="text-2xl">{feature.icon}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-md leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSection;
