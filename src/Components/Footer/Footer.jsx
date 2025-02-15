import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Contact and Legal Support */}
            <div className="w-full sm:w-1/3 mb-8">
              <h3 className="text-2xl font-bold mb-4">Need Legal Support?</h3>
              <p className="text-lg mb-4">
                Get in touch with expert lawyers and receive online legal
                support from the comfort of your home.
              </p>
              <a
                href="mailto:your-email@example.com"
                className="text-blue-400 hover:text-blue-600 text-lg font-semibold"
              >
                Email us for more details
              </a>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/3 mb-8">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-3">
                  <a href="#about" className="text-lg hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#services" className="text-lg hover:text-blue-400">
                    Our Services
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#privacy" className="text-lg hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#terms" className="text-lg hover:text-blue-400">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="w-full sm:w-1/3 mb-8">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  className="text-3xl hover:text-blue-500"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-3xl hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="text-3xl hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-3xl hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Section */}
          <div className="mt-12 text-center">
            <p className="text-sm">
              &copy; 2025 Your Company Name. All rights reserved. | Designed for
              online legal support services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
