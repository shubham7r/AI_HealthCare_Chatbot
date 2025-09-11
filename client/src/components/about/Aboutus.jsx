import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 slider-head">
              {/* Optional Subheading if needed */}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 slider-head">
              We deliver technologies that transform communication{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                between humans and companies.
              </span>
            </h1>
            {/* Optional border image */}
            {/* <img src="/your/path/to/titleborder.svg" className="mt-2" alt="Border" /> */}
          </div>
          <div className="text-gray-700 text-lg leading-relaxed slider-para">
            <p>
              Transform your customer engagement &amp; customer experience with
              AI for increased revenue, reduced costs, and improved CX.
            </p>
          </div>

          <div className="cta-flex flex gap-4">
            <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300 hover:bg-purple-700 hover:scale-105 ease-in-out cursor-pointer">
              Learn More
            </button>
            <button className="px-6 py-2 border border-purple-600 text-purple-600 font-semibold rounded-full transition duration-300 hover:bg-purple-100 hover:scale-105 ease-in-out cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5">
          <div className="slider-bg relative">
            <img
              src="https://exotel.com/wp-content/uploads/2024/01/about-us-image--scaled.jpg"
              alt="About Us"
              className="rounded-2xl w-full h-auto object-cover 
                 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
                 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.8)] 
                 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Optional bottom gradient */}
      <div className="extol-gradient mt-12">
        <img
          src=""
          alt=""
          className="slider-extol w-full h-4 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 opacity-30 rounded-full blur-md"
        />
      </div>
    </div>
  );
};

export default AboutUs;
