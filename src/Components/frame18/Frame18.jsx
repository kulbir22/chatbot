import React from "react";
import MessageBox from "../MessageBox";
import ImageComponent from "../ImageComponent";
import star from "../../assets/images/Frame-7.png";
import user from "../../assets/images/user.png";
import rightArrow from "../../assets/images/rightArrow.png";
import MessageUser from "../MessageUser";
import loadingImage from "../../assets/images/loadingImage.png";
import FaqComponent from "../FaqComponent";

const Frame18 = () => {
  return (
    <>
      <MessageBox
        imageSrc={star}
        messageBody="For the living room, would you prefer a flooring option that is budget-friendly or are you open to exploring natural wood options?."
        customStyles="mt-3"
      />

      <div>
        <FaqComponent
          altText="dasds"
          messageBody="Remodeling"
          customStyles="   mt-3"
          imageSrc={rightArrow}
          text="Budget Friendly"
        />
        <FaqComponent
          altText="dasds"
          messageBody="New Construction"
          customStyles="   mt-3"
          imageSrc={rightArrow}
          text="Expensive"
        />
        <FaqComponent
          altText="dasds"
          messageBody="Home Sale"
          customStyles="mt-3"
          imageSrc={rightArrow}
          text="No Limit"
        />
      </div>
    </>
  );
};

export default Frame18;
