// Banner.jsx
import React from "react";

const Banner = ({
  imageUrl = "https://via.placeholder.com/1200x500",
  linkUrl = "#",
  title = "Learn & Share Skills Locally",
  paragraph = "Connect with local tutors, join workshops and build real projects together.",
  buttonText = "Explore Now",
  onButtonClick = null,
}) => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
        
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[520px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>

         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 w-full h-full"></div>
            <div className="absolute px-6 py-8 text-center text-white max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                {title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-95 mb-8 drop-shadow-md">{paragraph}</p>

              <div className="flex justify-center">
                {onButtonClick ? (
                  <button
                    onClick={onButtonClick}
                    className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    {buttonText}
                  </button>
                ) : (
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
