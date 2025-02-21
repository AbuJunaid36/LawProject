import React from "react";
import "../../../App.css";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Symptoms of Liver Disease",
      description:
        "Learn about symptoms of liver disease. Here we have discussed Liver Disease.",
      author: "DocTime",
      time: "1 year ago",
      image: "/img/Drafting-section-189-notices.png",
    },
    {
      id: 2,
      title: "Best Pediatric Doctors in DocTime",
      description:
        "Choosing the most suitable Pediatric doctor for your child's health and well-being.",
      author: "DocTime",
      time: "1 year ago",
      image: "/img/Drafting-section-189-notices.png",
    },
    {
      id: 3,
      title: "Kidney Disease: Symptoms and Causes",
      description:
        "Learn about kidney disease symptoms and causes in Bangladesh.",
      author: "DocTime",
      time: "1 year ago",
      image: "/img/Drafting-section-189-notices.png",
    },
    {
      id: 4,
      title: "6 Popular Gynecologist & Obstetricians in DocTime",
      description:
        "Looking for the best gynecologist and obstetricians in Bangladesh? Check out this blog.",
      author: "DocTime",
      time: "1 year ago",
      image: "/img/Drafting-section-189-notices.png",
    },
  ];

  return (
    <div className="hidden md:block">
      <section className="px-4 my-20 sm:px-6 lg:px-40 ">
        <h3 className="text-xl font-semibold text-blue-500">Recent Blogs</h3>
        <h2 className="mt-2 text-2xl md:text-5xl font-bold text-gray-800 sm:text-3xl">
          Read our latest blogs from Health Experts
        </h2>
        <div className="mt-6 overflow-x-auto  custom-scrollbar p-2">
          <div className="flex gap-6 lg:gap-8 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition hover:border-blue-400 flex-shrink-0 w-72"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600 flex items-center">
                    <span className="mr-1">{blog.author}</span>•
                    <span className="ml-1">{blog.time}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-4">
          <a
            href="#"
            className="flex justify-end text-blue-500 font-semibold hover:underline"
          >
            View All →
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Blogs;
