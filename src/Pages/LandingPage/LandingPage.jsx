import React from 'react'
import Hero from "../LandingPage/Hero/Hero";
import Ourservices from "../LandingPage/Ourserives/Ourservices";
import Countsection from "../LandingPage/CountSection/Countsection";
import Whyus from "../LandingPage/WhyUs/Whyus";
import Availablelawyear from "../LandingPage/AvailableLawyear/Availablelawyear";
import Media from "../LandingPage/Media/Media";
import Blogs from "../LandingPage/Blogs/Blogs";
import Question from "../LandingPage/Question/Question";
import Appdownload from "../LandingPage/AppDownload/Appdownload";
import Buyonline from "../LandingPage/BuyOnline/Buyonline";
import Services from "../LandingPage/Services/Services";
import Packages from "../LandingPage/Packages/Packages";
import Registration from "../LandingPage/Registration/Registration";
import Lawyearlist from "../LandingPage/Lawyearlist/Lawyearlist";
import Partner from "../LandingPage/Partner/Partner";
import Websitepartner from "../LandingPage/WebsitePartner/Websitepartner";

const LandingPage = () => {
  return (
    <div>
      
      <Hero />

      <Ourservices/>

      <Lawyearlist />

      <Countsection />

      <Whyus />

      <section className="flex mx-auto flex-col lg:flex-row items-center bg-white w-[80%] my-20">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 order-last lg:order-none">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 leading-snug">
            70% of Health Consultations
            <br />
            can be managed online
          </h2>
          <p className="text-gray-600 text-xl mt-4">
            According to{" "}
            <a href="#" className="text-blue-500 font-medium">
              health professionals
            </a>
            , 70% of consultations can be effectively conducted online. This
            offers you the convenience of accessing care from anywhere, saving
            time, and ensuring you get the attention you need without the hassle
            of traveling to a clinic. Whether it's for routine check-ups,
            follow-ups, or managing ongoing health conditions, online
            consultations provide a flexible and efficient solution. Embrace the
            future of healthcare by exploring our online consultation options
            today.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center order-firstt lg:order-none">
          <div className="relative w-3/4 lg:w-2/3">
            {/* Circular Icon */}
            <div className="absolute -top-6 -left-6 bg-white shadow-lg rounded-full p-2 flex items-center justify-center">
              <img
                src="/img/icon.png"
                alt="icon"
                className="w-20  md:w-28 h-20  md:h-28 rounded-full opacity-70"
                style={{ rotate: "-30deg" }}
              />
            </div>
            {/* Doctor Image */}
            <img
              src="/img/1Y1A2377-Photo-scaled.jpg"
              alt="Online Consultation"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      <Availablelawyear />

      <Buyonline />

      <Services />

      <Packages />

      <Websitepartner />

      <Partner />

      <Media />

      <Appdownload />

      <Blogs />

      <Question />

      <Registration />


    </div>
  )
}

export default LandingPage
