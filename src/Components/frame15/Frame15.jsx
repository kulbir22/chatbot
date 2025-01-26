import React from "react";
import MessageBox from "../MessageBox";
import ImageComponent from "../ImageComponent";
import star from "../../assets/images/Frame-7.png";
import user from "../../assets/images/user.png";
import rightArrow from "../../assets/images/rightArrow.png";
import MessageUser from "../MessageUser";
import loadingImage from "../../assets/images/loadingImage.png";
import FaqComponent from "../FaqComponent";

const Frame15 = () => {
  return (
    <>
      <MessageBox
        imageSrc={star}
        messageBody="What is the purpose of changing your flooring?."
        customStyles="mt-3"
      />

      <div>
        <FaqComponent
          altText="dasds"
          messageBody="Remodeling"
          customStyles="   mt-3"
          imageSrc={rightArrow}
        />
        <FaqComponent
          altText="dasds"
          messageBody="New Construction"
          customStyles="   mt-3"
          imageSrc={rightArrow}
        />
        <FaqComponent
          altText="dasds"
          messageBody="Home Sale"
          customStyles="mt-3"
          imageSrc={rightArrow}
        />
        <FaqComponent
          altText="dasds"
          messageBody="Rental Upgrade"
          customStyles="mt-3"
          imageSrc={rightArrow}
        />
      </div>

      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Remodeling."
        customBg="bg-[#E8EDF2]"
      />
    </>
  );
};

export default Frame15;
