import React from "react";

const Services = () => {
  const features = [
    {
      icon: "/img/2717366.png",
      alt: "Icon 1",
      text: "Easily can create affidavit",
    },
    {
      icon: "/img/png-clipart-index-finger-computer-icons-hand-pointing-pointing-finger-text-photography-thumbnail-removebg-preview.png",
      alt: "Icon 2",
      text: "Certified copies of your document",
    },
    {
      icon: "/img/korean-love-sign-korea-finger-600nw-2348069823-removebg-preview.png",
      alt: "Icon 3",
      text: "Get notary public services",
    },
  ];

  return (
    <div className="hidden md:block">
      <section className="bg-white  my-10 md:my-20 px-6">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row  justify-between space-y-10 md:space-y-0 gap-4">
          {/* Text Content */}
          <div className="w-full md:w-1/2 ">
            <h4 className="text-blue-500 text-lg font-medium mb-2 md:mb-4">
              Legal documents at your door steps
            </h4>
            <h2 className="text-2xl md:text-6xl font-extrabold text-gray-800 mb-4 md:mb-8">
              Collect any legal documents at your door step
            </h2>
            <p className="text-gray-600 text-lg mb-4 md:mb-12">
              Legal services made easy for everyone
            </p>
            {/* Features List */}
            <div className="space-y-6 mb-4 ">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-4 rounded-md">
                    <img
                      src={feature.icon}
                      alt={feature.alt}
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-gray-700 text-lg">{feature.text}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-500 transition whitespace-nowrap">
              Apply for these services
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 order-first md:order-2">
            <img
              src="/img/hero.jpg"
              alt="Image 1"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
