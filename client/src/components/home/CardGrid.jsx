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
      "https://www.analyticsinsight.net/wp-content/uploads/2021/09/AI-in-Healthcare-1.jpg",
    description:
      "AI is transforming health records into actionable insights using big data.",
  },
  {
    title: "AI Healthcare #4",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/chatbot%20in%20healthcare.jpg",
    description:
      "Learn how virtual assistants are helping patients book appointments and access care.",
  },
  {
    title: "AI Healthcare #5",
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/03/healthcare-ai.jpg",
    description:
      "Chatbots can triage symptoms, guide treatments, and offer mental health support.",
  },
  {
    title: "AI Healthcare #6",
    image:
      "https://research.aimultiple.com/wp-content/uploads/2023/02/Healthcare-chatbot.png",
    description:
      "Discover AI’s role in remote patient monitoring and personalized medicine.",
  },
];

const CardGrid = () => {
  return <CardCarousel cards={cardsData} />;
};

export default CardGrid;
