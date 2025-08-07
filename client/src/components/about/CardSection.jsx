import React from "react";

const values = [
  {
    title: "#LikeAFriend",
    image: "https://exotel.com/wp-content/uploads/2025/07/Artboard-1.png",
    description:
      "We treat our customers like we’d treat a friend with honesty, care, and a deep sense of responsibility. At Exotel, being customer-focused isn’t a function, it’s a mindset. We stay close to their problems, move fast to solve them, and go the extra mile to build long-term trust not just transactions.",
  },
  {
    title: "#StayTrue",
    image: "https://exotel.com/wp-content/uploads/2025/07/StayTrue.png",
    description:
      "We do the right thing, even when no one is watching. Integrity at Exotel means being honest with ourselves, with each other, and with our customers. We speak the truth, own our actions, and make decisions rooted in fairness and transparency, always upholding the trust people place in us.",
  },
  {
    title: "#It’sATeamSport",
    image: "https://exotel.com/wp-content/uploads/2025/07/ItsATeamSport.png",
    description:
      "We win together or not at all. Every success at Exotel is a team sport built on cross-functional trust, shared goals, and seamless handshakes. We collaborate proactively, communicate openly, and work through disagreements with respect, knowing that execution speed and quality improve when we act as one team.",
  },
  {
    title: "#OwnIt",
    image: "https://exotel.com/wp-content/uploads/2025/07/OwnIt-1.png",
    description:
      "We don’t wait for instructions we take initiative, follow through, and own outcomes end-to-end. At Exotel, ownership isn’t defined by role or hierarchy it’s about stepping up, delivering results, and holding ourselves accountable, especially when things don’t go as planned.",
  },
  {
    title: "#PursuitOfExcellence",
    image:
      "https://exotel.com/wp-content/uploads/2025/07/PursuitOfExcellence.png",
    description:
      "We don’t settle. We push boundaries, challenge the status quo, and constantly look for ways to improve our product, our processes, and ourselves. This hunger to do better not for perfection, but for impact is what keeps us ahead in a competitive world.",
  },
  {
    title: "#BeTheChange",
    image: "https://exotel.com/wp-content/uploads/2025/07/BeTheChange.png",
    description:
      "We embrace change as a constant and often, as a choice as the world around us is changing. At Exotel, we question what’s not working, experiment without fear, and speak up when it matters. Whether it's changing a process or shifting mindsets, we believe in creating the change we want to see.",
  },
];

const AboutValuesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Exotel Values Built with{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            people at its core
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
        {values.map((val, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 p-6 transition-all duration-300 ease-in-out border border-gray-100 flex flex-col justify-start text-left h-full cursor-pointer"
          >
            <img src={val.image} alt={val.title} className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {val.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValuesSection;
