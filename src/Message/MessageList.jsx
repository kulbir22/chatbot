import React, { useEffect, useRef } from "react";
import Message from "./Message";
import "./MessageList.css";
import { ThreeDot } from "react-loading-indicators";

const MessageList = ({
  messages,
  handleSendMessage,
  handleSelectedTile,
  handleUpload,
  loading,
  loadingIndex,
  isCountertop,
}) => {
  const messageListRef = useRef(null);

  // useEffect(() => {
  //   if (messageListRef.current) {
  //     messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  //   }
  // }, [messages]); // Run this effect whenever the messages change
  useEffect(() => {
    if (messageListRef.current) {
      setTimeout(() => {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }, 100); // Small delay to ensure the image is rendered before scrolling
    }
  }, [messages]);

  return (
    <div
      className="message-list"
      ref={messageListRef} // Correctly place ref here
      style={{
        maxHeight: "90%", // Set a height to enable scrolling
        overflowY: "auto", // Enable vertical scroll
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
          handleSendMessage={handleSendMessage}
          handleSelectedTile={handleSelectedTile}
          handleUpload={handleUpload}
          loading={loading}
          isLatestUpload={loadingIndex === index}
          loadingIndex={loadingIndex}
          isCountertop={isCountertop}
        />
      ))}
      {loading && (
        <ThreeDot
          variant="bob"
          color="#616ab8"
          size="medium"
          text=""
          textColor=""
        />
      )}
    </div>
  );
};

export default MessageList;
