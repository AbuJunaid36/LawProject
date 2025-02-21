import React, { useState } from "react";

const Question = () => {
  // Initialize state to track which section is open
  const [isOpen, setIsOpen] = useState({
    description: false,
    styleNotes: false,
    sizeFit: false,
    material: false,
    specifications: false,
    sellerInfo: false,
  });

  // Toggle the open state of a section
  const toggleSection = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="hidden md:block">
      <div className="flex flex-col md:flex-row justify-between my-10 md: mx-auto w-[80%] gap-8">
        <div className="">
          <div className="text-3xl sm:text-6xl md:text-6xl mt-4 mb-4 font-bold text-gray-800">
            Have Any Questions?
          </div>
          <div className="text-xl">
            Find below our frequently asked questions. If you have other
            questions please contact us.
          </div>
        </div>
        <div className="w-[100%] md:w-[60%]">
          {/* Collapsible Sections */}
          {[
            { title: "Description", key: "description" },
            { title: "Style Notes", key: "styleNotes" },
            { title: "Size & Fit", key: "sizeFit" },
            { title: "Material", key: "material" },
            { title: "Specifications", key: "specifications" },
            { title: "Seller Information", key: "sellerInfo" },
          ].map((section) => (
            <div key={section.key} className="mt-4 border-t border-gray-200">
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex justify-between items-center py-3 text-left text-gray-600 font-medium hover:text-gray-900 transition"
              >
                {section.title}
                <span>{isOpen[section.key] ? "-" : "+"}</span>
              </button>
              {isOpen[section.key] && (
                <p className="text-sm md:text-base text-gray-600 px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
