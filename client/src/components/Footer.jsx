import React from "react";
import {
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-7 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg">MediBot</h3>
          <p>
            An AI-powered Health Assistant designed to provide insights using
            voice, text, and image input.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg">Disclaimer</h3>
          <p>
            This tool is for demo and educational use only. It is not a
            substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>

        {/* Contact & Tech */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg">
            Contact & Tech
          </h3>
          <p>📧 support@medibot.ai</p>
          <p className="mt-1">
            🛠 Built with React, Flask, MongoDB, Tailwind, Whisper, and LLaMA.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-blue-500 hover:text-white"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-blue-700 hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-blue-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 hover:bg-pink-500 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2025 MediBot – All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
