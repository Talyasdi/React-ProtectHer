import React from "react";
import ChatBot from "react-simple-chatbot";
import { script } from "./MyChatbot";
import { stepifyScript } from "./utils";

const ChatbotPage = () => (
  <div className="main-container"> {/* Use a CSS class */}
    <ChatBot
      bubbleOptionStyle={{ backgroundColor: "white", color: "gray" }}
      style={{ fontFamily: 'Arial, sans-serif' }}
      steps={stepifyScript(script)}
    />
  </div>
);

export default ChatbotPage;