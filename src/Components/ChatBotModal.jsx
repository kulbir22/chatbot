// src/Chatbot.js
import React, { useState } from "react";
import star from "../assets/images/star.png";
import send from "../assets/images/send.png";
import user from "../assets/images/user.png";
import attachment from "../assets/images/attachment.png";
import loadingImage from "../assets/images/loadingImage.png";
import rightArrow from "../assets/images/rightArrow.png";
import "./ChatBotModal.css";
import MessageBox from "./MessageBox";
import ImageComponent from "./ImageComponent";
import MessageUser from "./MessageUser";
import FaqComponent from "./FaqComponent";
import { Frame29 } from "../Pages/Frame29/Frame29";
import { Frame31 } from "../Pages/Frame31/Frame31";
import { CardChat } from "./CardChat/CardChat";
import { CardData, CardDataBottm } from "../utils/data";
import Frame38 from "./frame38/Frame38";
import Frame14 from "./frame14/Frame14";
import Frame15 from "./frame15/Frame15";
import Frame18 from "./frame18/Frame18";
import { Frame32 } from "../Pages/Frame32/Frame32";
import Frame16 from "./frame16/Frame16";

import Frame33 from "../Pages/Frame33/Frame33";
import Frame34 from "../Pages/Frame34/Frame34";
import Frame35 from "../Pages/Frame35/Frame35";
import Frame36 from "../Pages/Frame36/Frame36";
import Frame40 from "../Pages/frame40/Frame40";
import Frame41 from "../Pages/frame41/Frame41";

const ChatBotModal = ({ modalOpen, closeModal }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);

      // Simple bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I help you?", sender: "bot" },
        ]);
      }, 1000);

      setInput("");
    }
  };

  return (
    // The modal is conditionally rendered based on modalOpen
    modalOpen && (
      <div className="chatbot-container">
        <div className="flex items-center gap-3  p-3">
          <img
            src={star}
            alt="arrow down"
            className="w-16 h-full cursor-pointer"
          />
          <div>
            <p className="font-semibold text-[22px]">MSI AI Assistant</p>
            <p className="text-[#727681]">We are online to assist you</p>
          </div>
        </div>

        <div className="relative bg-[#F7F8F9] rounded-[18px]  h-[559px]">
          <div className="chat-box overflow-y-scroll h-[493px]">
            <div className=" rounded-[18px]  px-[15px] pb-[15px]">
              <div className="relative bg-[#F7F8F9]  h-full px-5">
                <div className="frames-start">
                  <div className="mb-5">
                    <Frame38 />
                  </div>
                  <div className="mb-5">
                    <Frame14 />
                  </div>
                  <div className="mb-5">
                    <Frame15 />
                  </div>
                  <div className="mb-5">
                    <Frame18 />
                  </div>
                  <div className="mb-5">
                    <Frame16 />
                  </div>
                </div>
                <div className="frames-bottom">
                  {/* Ram start*/}
                  <div className="mb-5">
                    <Frame31 />
                  </div>
                  <div className="mb-5">
                    <Frame32 />
                  </div>
                  <div className="mb-5">
                    <Frame33 />
                  </div>

                  <div className="mb-5">
                    <Frame36 />
                  </div>
                  <div className="mb-5">
                    <Frame41 />
                  </div>
                  <div className="mt-8">
                    <Frame40 />
                  </div>
                </div>
              </div>

              <div className="flex items-center input-container absolute bottom-4 w-[628px] h-[56px] rounded-[12px] border  ">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Write a message..."
                  className="outline-none"
                />

                <div className="flex items-center">
                  <img
                    src={attachment}
                    alt="dsfdfd"
                    className="w-[34px] h-[34px] cursor-pointer"
                  />
                  <img
                    src={send}
                    alt="hfdgfv"
                    className="w-[40px] h-[40px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatBotModal;
