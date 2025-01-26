import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/star.png";
import floorthumb4 from "../../assets/images/floorthumb-4.png";
import FaqComponent from "../../Components/FaqComponent";
import rightArrow from "../../assets/images/rightArrow.png";
import MessageUser from "../../Components/MessageUser";
import user from "../../assets/images/user.png";

const Frame34 = () => {
  return (
    <>
      <div className="Frame34">
        <div className="mt-5 ml-10">
          <img src={floorthumb4} alt="Frame34" className="" />
        </div>
        <div>
          <div>
            <FaqComponent
              altText="dasds"
              messageBody="Know more about the product"
              customStyles="mt-3"
              imageSrc={rightArrow}
              text="Budget Friendly"
            />
            <FaqComponent
              altText="dasds"
              messageBody="Show similar products"
              customStyles="mt-3"
              imageSrc={rightArrow}
              text="Expensive"
            />
            <FaqComponent
              altText="dasds"
              messageBody="See lighter product options"
              customStyles="mt-3"
              imageSrc={rightArrow}
              text="No Limit"
            />
            <FaqComponent
              altText="dasds"
              messageBody="See darker product options"
              customStyles="mt-3"
              imageSrc={rightArrow}
              text="No Limit"
            />
          </div>
          <MessageUser
            imageSrc={user}
            customStyles="mt-5"
            messageBody="Know more about the product"
            customBg="bg-[#E8EDF2]"
          />
        </div>
      </div>
    </>
  );
};

export default Frame34;
