import React, { useState } from 'react';
import './chatbot.css';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot">
      <div className={`chatbot__container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot__header">
          <h3>Chatbot</h3>
          <button className="chatbot__close" onClick={toggleChatbot}>
            &times;
          </button>
        </div>
        <div className="chatbot__body">
          {/* Render chatbot here */}
          <p>Hello! How can I assist you today?</p>
        </div>
      </div>
      <button className="chatbot__toggle" onClick={toggleChatbot}>
        <span className="chatbot__toggle-icon">&#128172;</span>
      </button>
    </div>
  );
};

export default ChatbotPopup;