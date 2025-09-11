// src/components/CardGrid.jsx
import React from "react";
import CardCarousel from "./CardCarousel";

const cardsData = [
  {
    title: "AI Healthcare #1",
    image:
      "https://exotel.com/wp-content/uploads/2024/02/whatsapp-chatbot.jpeg",
    description:
      "Discover how AI-powered diagnostics improve early detection and patient outcomes.",
  },
  {
    title: "AI Healthcare #2",
    image:
      "https://exotel.com/wp-content/uploads/2025/05/Healthcare-Chatbot.jpg",
    description:
      "Explore how chatbots are easing the workload of healthcare professionals.",
  },
  {
    title: "AI Healthcare #3",
    image:
      "https://th.bing.com/th/id/OIP.u9mnYKqVIIujzUcHy7E9JQAAAA?w=328&h=133&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description:
      "AI is transforming health records into actionable insights using big data.",
  },
  {
    title: "AI Healthcare #4",
    image:
      "https://th.bing.com/th/id/OIP.-n2cusDHIFtXLCAstwKbrgHaFE?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description:
      "Learn how virtual assistants are helping patients book appointments and access care.",
  },
  {
    title: "AI Healthcare #5",
    image:
      "https://th.bing.com/th/id/OIP.53qsBS26TvKmlHxI4FhJ9QHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description:
      "Chatbots can triage symptoms, guide treatments, and offer mental health support.",
  },
  {
    title: "AI Healthcare #6",
    image: "https://apifriends.com/wp-content/uploads/2017/10/chatbot.png",
    description:
      "Discover AI’s role in remote patient monitoring and personalized medicine.",
  },
];

// Wrapper to add styles before passing to carousel
const CardGrid = () => {
  const styledCards = cardsData.map((card) => ({
    ...card,
    className:
      "bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer p-4",
  }));

  return <CardCarousel cards={styledCards} />;
};

export default CardGrid;
