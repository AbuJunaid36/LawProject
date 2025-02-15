import React,{ useEffect } from 'react'


const Consultation = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);


        //start ..........................................................................................
  const doctors = [
    {
      title: "Experienced MBBS Doctor",
      price: "৳249",
      img: "/path-to-image-1", // Replace with actual image path
      buttonText: "See Doctor",
    },
    {
      title: "Experienced Child Doctor",
      price: "৳25",
      img: "/path-to-image-2", // Replace with actual image path
      buttonText: "See Doctor",
    },
    {
      title: "Experienced Female Gyne Doctor",
      price: "৳269",
      img: "/path-to-image-3", // Replace with actual image path
      buttonText: "See Doctor",
    },
    {
      title: "Treatment For Dengue",
      price: "৳269",
      img: "/path-to-image-4", // Replace with actual image path
      buttonText: "See Doctor",
    },
  ];

  const specialists = [
    {
      name: "Child Disease Specialist",
      fee: "৳499",
      img: "/path-to-specialist-1", // Replace with actual image path
      status: "Online",
    },
    {
      name: "Female Gynecologist",
      fee: "৳399",
      img: "/path-to-specialist-2", // Replace with actual image path
      status: "Online",
    },
    {
      name: "Psychiatrist",
      fee: "৳599",
      img: "/path-to-specialist-3", // Replace with actual image path
      status: "Online",
    },
    {
      name: "Mental Health Counsellor",
      fee: "৳599",
      img: "/path-to-specialist-4", // Replace with actual image path
      status: "Online",
    },
    {
      name: "Skin Disease Specialist",
      fee: "Offline",
      img: "/path-to-specialist-5", // Replace with actual image path
      status: "Offline",
    },
    {
      name: "Sex Disease Specialist",
      fee: "Offline",
      img: "/path-to-specialist-6", // Replace with actual image path
      status: "Offline",
    },
  ];

  //end ...........................................................................................

  //start ...........................................................................................

  const specialties = [
    {
      name: "General Physician",
      icon: "🩺",
      description: "Cold, flu, fever, vomiting, infections, headaches or...",
    },
    {
      name: "Pediatrics",
      icon: "🧸",
      description: "Any children’s health related issues including...",
    },
    {
      name: "Gynae & Obs",
      icon: "🤰",
      description: "Any women’s health related issues including...",
    },
    {
      name: "Dermatology",
      icon: "🧴",
      description: "Treatment of diseases related to skin, hair, and...",
    },
    {
      name: "Internal Medicine",
      icon: "💊",
      description: "Prevention, diagnosis, and treatment of adults across...",
    },
    {
      name: "Endocrinology",
      icon: "📊",
      description: "Treatment of diseases related to problems with...",
    },
    {
      name: "Neurology",
      icon: "🧠",
      description: "Diagnosis, treatment for diseases involving the...",
    },
    {
      name: "Gastroenterology",
      icon: "🍽️",
      description: "Diseases affecting the gastrointestinal tract...",
    },
    {
      name: "Cardiology",
      icon: "💙",
      description: "Diagnosis, treatment of congenital heart defects...",
    },
    {
      name: "Urology",
      icon: "🩸",
      description: "Diagnosis and treatment of diseases of the male and...",
    },
    {
      name: "Nutrition & Food Science",
      icon: "🍎",
      description: "Weight management, health & wellness...",
    },
    {
      name: "Dentistry",
      icon: "🦷",
      description: "Diagnosis, management, and treatment of defects...",
    },
  ];

  //end ...................................................................................................
  return (
    <div>
       {/* start ........................................................................... */}
       <div className=" py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Consult an Experienced MBBS Doctor
            </h2>
            <p className="text-gray-600 text-lg">
              Get consultation 24/7 within just 10 minutes
            </p>
          </div>

          {/* Doctor Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.title}
                  className="rounded-lg shadow w-full mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  {doctor.title}
                </h3>
                <p className="text-blue-500 font-bold text-xl">
                  {doctor.price}
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  {doctor.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Specialist Section */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800">
              Consult a Specialist
            </h3>
            <p className="text-gray-600">
              See expert with 10 years of experience in their respective fields
            </p>

            {/* Specialist Slider */}
            <div className="flex overflow-x-auto mt-6 space-x-4">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-64"
                >
                  <img
                    src={specialist.img}
                    alt={specialist.name}
                    className="w-full rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {specialist.name}
                  </h4>
                  <p className="text-blue-500 font-bold">{specialist.fee}</p>
                  <p
                    className={`text-sm mt-1 ${
                      specialist.status === "Online"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {specialist.status}
                  </p>
                </div>
              ))}
            </div>

            {/* View All */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                View All →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end ...................................................................................... */}

      {/* start .............................................................................. */}
      <section className="py-12 mx-auto w-[80%]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Find Your Doctor From 36+ Clinical Areas
            </h2>
            <a href="#view-all" className="text-blue-500 hover:underline">
              View All →
            </a>
          </div>
          {/* Grid container */}
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg hover:ring-1 hover:ring-blue-500 transition-transform transform hover:scale-105"
              >
                {/* Maintain square shape */}
                <div className="aspect-w-1 aspect-h-1 flex flex-col items-center justify-center p-4">
                  {/* Icon centered */}
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-100 text-blue-500 rounded-full mb-3 text-3xl sm:text-2xl">
                    {item.icon}
                  </div>
                  {/* Text below the icon */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-md font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-xs text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end ...................................................................................... */}

      {/* start .............................................................................. */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Doctor Name and Qualification */}
        <div className="text-center">
          <h1 className="text-xl font-bold">Dr. Tahmina Haque Pinki</h1>
          <p className="text-sm text-gray-600">
            MBS, MS (Gynae & Obs), FCFS (Gynae & Obs)
          </p>
          <p className="text-sm text-gray-600">Gynecologist & Obstetrician</p>
        </div>

        {/* Appointment Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold">
            Appointment
          </button>
        </div>

        {/* Doctor Details */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Total Experience</span>
            <span className="text-sm font-semibold">14+ Years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">BMDC Number</span>
            <span className="text-sm font-semibold">51550</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Total Rating</span>
            <span className="text-sm font-semibold">5 (33)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Working in</span>
            <span className="text-sm font-semibold">
              Dhaka Medical College Hospital
            </span>
          </div>
        </div>

        {/* Tabs for Info, Experience, Reviews */}
        <div className="mt-6 flex justify-around border-b">
          <button className="text-sm font-semibold text-blue-500 pb-2 border-b-2 border-blue-500">
            Info
          </button>
          <button className="text-sm text-gray-600 pb-2">Experience</button>
          <button className="text-sm text-gray-600 pb-2">Reviews</button>
        </div>

        {/* At a Glance Section */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">At a Glance</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  Instant Consultation Time
                </p>
                <p className="text-sm text-gray-600">
                  Sat – Wed (1 PM – 11 PM)
                </p>
              </div>
              <span className="text-lg font-bold">44</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  Appointment Consultation Time
                </p>
                <p className="text-sm text-gray-600">
                  Sat – Wed (1 PM – 11 PM)
                </p>
              </div>
              <span className="text-lg font-bold">55</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Consultation Fee</p>
              </div>
              <span className="text-lg font-bold">+525</span>
            </div>
          </div>
        </div>

        {/* Book Online Appointment Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold">
            Book Online Appointment
          </button>
        </div>
      </div>
      {/* end ...................................................................................... */}

    </div>
  )
}

export default Consultation
