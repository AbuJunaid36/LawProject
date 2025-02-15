import React from "react";

const Appdownload = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 py-20 my-20 text-white text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-6">
          Download Our App
        </h2>
        <p className="text-lg mb-8">
          Experience our features on the go. Download the app today from your
          preferred platform and stay connected wherever you are!
        </p>

        <div className="flex justify-center gap-8">
          {/* Google Play Store Logo */}
          <a
            href="https://play.google.com/store/apps"
            className="block w-32 md:w-52"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/Applestore.png"
              alt="Google Play Store"
              className="w-full h-auto"
            />
          </a>

          {/* Apple App Store Logo */}
          <a
            href="https://www.apple.com/app-store/"
            className="block w-32 md:w-52"
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
      </section>
    </div>
  );
};

export default Appdownload;
