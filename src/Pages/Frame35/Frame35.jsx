import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/star.png";
import FaqComponent from "../../Components/FaqComponent";
import rightArrow from "../../assets/images/rightArrow.png";
import MessageUser from "../../Components/MessageUser";
import user from "../../assets/images/user.png";
import TabsCard from "../../Components/Tabs/TabsCard";

const Frame35 = () => {
  return (
    <>
      <div className="mb-5">
        <FaqComponent
          altText="dasds"
          messageBody="Show similar products"
          customStyles="mt-3"
          imageSrc={rightArrow}
          text="Budget Friendly"
        />
        <FaqComponent
          altText="dasds"
          messageBody="See lighter product options"
          customStyles="mt-3"
          imageSrc={rightArrow}
          text="Expensive"
        />
        <FaqComponent
          altText="dasds"
          messageBody="See darker product options"
          customStyles="mt-3"
          imageSrc={rightArrow}
          text="No Limit"
        />
      </div>
    </>
  );
};

export default Frame35;
