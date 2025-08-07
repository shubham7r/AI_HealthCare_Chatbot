import React from "react";

const teamMembers = [
  {
    name: "Shubham Shelke (Shubham)",
    title: "Co-Founder & CEO",
    image:
      "https://sdmntprukwest.oaiusercontent.com/files/00000000-132c-6243-a52f-b35bd0b7c52a/raw?se=2025-08-06T14%3A01%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=90f96ece-9554-5c2a-b820-4b22c3d693b3&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-06T01%3A53%3A23Z&ske=2025-08-07T01%3A53%3A23Z&sks=b&skv=2024-08-04&sig=74s9wnJWjHC3dIIJue6ww22luHuEjGE35/Ahx1CPUZM%3D",
    linkedin: "https://www.linkedin.com/in/shubhamshelke7/",
    bio: `Shubham is a technology entrepreneur, and the co-founder of AI HEALTHCARE, the leading Connected Conversation Platform...`,
  },
  {
    name: "Shriram Natve (Shriram)",
    title: "Co-Founder & COO",
    image:
      "https://exotel.com/wp-content/uploads/2024/02/Ishwar_exotel-scaled.jpg",
    linkedin: "https://www.linkedin.com/in/ishwar-sridharan-b936318/",
    bio: `Shriram Natve is a technology innovator who co-founded AI HEALTHCARE with Shubham Shelke...`,
  },
  {
    name: "Shrikant Barapatre (Shrikant)",
    title: "Co-Founder & CGO",
    image: "https://exotel.com/wp-content/uploads/2023/04/Sachin.png",
    linkedin: "https://www.linkedin.com/in/bhatiasachin",
    bio: `Shrikant Barapatre is a co-founder and growth strategist with a passion for creating game-changing products...`,
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
        <p className="mt-4 text-gray-600">
          Meet the leaders behind our project, who bring experience and passion
          to create cutting-edge solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="[perspective:1000px] cursor-pointer group"
          >
            <div className="relative w-full h-96 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="h-2/3 w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 text-center flex-1">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-md p-4 transform rotate-y-180 text-sm flex flex-col">
                <h3 className="font-bold text-lg text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-6 flex-1">
                  {member.bio}
                </p>
                <div className="text-center">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <img
                      src="https://exotel.com/wp-content/themes/exotel/img/blogs/linkedin.png"
                      alt="LinkedIn"
                      className="w-6 inline-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
