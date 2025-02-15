import React from "react";
// Inside your media.jsx file
import "../../../App.css";

const Media = () => {
  const articles = [
    {
      id: 1,
      logo: "/img/sm_5b49ffa47b3fc.jpg", // Replace with actual path
      date: "Sunday, 4 April, 2021",
      title: "ঘরে বসেই স্বাস্থ্যসেবা গ্রহণ করুন ডাকটাইম টেলিমেডিসিন অ্যাপে",
      image: "/img/hero.jpg", // Replace with actual path
    },
    {
      id: 2,
      logo: "/img/sm_5b49ffa47b3fc.jpg", // Replace with actual path
      date: "Monday, 31 May, 2021",
      title: "Healthcare at home with DocTime",
      image: "/img/hero.jpg", // Replace with actual path
    },
    {
      id: 3,
      logo: "/img/sm_5b49ffa47b3fc.jpg", // Replace with actual path
      date: "Tuesday, 31 December, 2021",
      title: "ডকটাইম মিট সুপার হিরোস বিজয় দিবসে আর্ত শিশুদের নিয়ে অনুষ্ঠান",
      image: "/img/hero.jpg", // Replace with actual path
    },
    {
      id: 3,
      logo: "/img/sm_5b49ffa47b3fc.jpg", // Replace with actual path
      date: "Tuesday, 31 December, 2021",
      title: "ডকটাইম মিট সুপার হিরোস বিজয় দিবসে আর্ত শিশুদের নিয়ে অনুষ্ঠান",
      image: "/img/hero.jpg", // Replace with actual path
    },
    {
      id: 3,
      logo: "/img/sm_5b49ffa47b3fc.jpg", // Replace with actual path
      date: "Tuesday, 31 December, 2021",
      title: "ডকটাইম মিট সুপার হিরোস বিজয় দিবসে আর্ত শিশুদের নিয়ে অনুষ্ঠান",
      image: "/img/hero.jpg", // Replace with actual path
    },
  ];

  return (
    <div>
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            Ainporamorsho in Mass Media
          </h2>
          {/* Parent container for horizontal scrolling */}
          <div className="flex overflow-x-auto space-x-6 custom-scrollbar p-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-80 flex-shrink-0 border  "
              >
                {/* Logo */}
                <div className="flex items-center p-4 border-b">
                  <img src={article.logo} alt="Media Logo" className="h-6" />
                </div>
                {/* Article Image */}
                <div className="relative">
                  <img
                    src={article.image}
                    alt="Article Thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </div>
                {/* Article Details */}
                <div className="p-4 ">
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <h3 className="text-lg font-medium text-gray-800 mt-2 mb-4">
                    {article.title}
                  </h3>
                  <a
                    href="#"
                    className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Read more{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
