import React from "react";
import MessageBox from "../MessageBox";
import ImageComponent from "../ImageComponent";
import star from "../../assets/images/Frame-7.png";

const Frame38 = () => {
  return (
    <>
      <MessageBox
        imageSrc={star}
        messageTitle="Hi there!"
        messageBody="I'm MSI Chatbot. Your guide for surfaces."
      />
      <MessageBox
        messageBody="Please choose an option to begin:"
        customStyles="mt-2"
      />
      <div className="flex justify-between gap-3 mb-16">
        <ImageComponent />
        <ImageComponent />
      </div>
    </>
  );
};

export default Frame38;
