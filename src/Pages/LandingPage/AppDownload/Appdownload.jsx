import React from "react";

const Appdownload = () => {
  return (
    <div className="hidden md:block">
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 py-20 my-20 text-white text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-64 h-64 bg-white/10 rounded-full animate-pulse"></div>
          <div className="w-96 h-96 bg-white/5 rounded-full absolute animate-ping"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Download Our App
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Experience our features on the go. Download the app today from your
            preferred platform and stay connected wherever you are!
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center gap-8 animate-fade-in-up delay-200">
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com/store/apps"
              className="block w-40 md:w-52 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/Applestore.png"
                alt="Google Play Store"
                className="w-full h-auto"
              />
            </a>

            {/* Apple App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              className="block w-40 md:w-52 hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/Appstore.png"
                alt="Apple App Store"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appdownload;
