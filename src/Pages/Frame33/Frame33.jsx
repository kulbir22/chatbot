import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/Frame-7.png";
import floorthumb4 from "../../assets/images/floorthumb-4.png";
import FaqComponent from "../../Components/FaqComponent";
import rightArrow from "../../assets/images/rightArrow.png";

const Frame33 = () => {
  return (
    <>
      <div className="Frame33">
        <MessageBox
          imageSrc={star}
          messageBody="Here is the preview of your room with your selected option"
        />
        <div className="mt-5 ml-10">
          <img src={floorthumb4} alt="Frame33" className="" />
        </div>
        <div>
          <div>
            <FaqComponent
              altText="dasds"
              messageBody="Know more about the product"
              customStyles="mt-3"
              imageSrc={rightArrow}
              border="border-[#1D73F2] border rounded-[100px]"
            />
            <FaqComponent
              altText="dasds"
              messageBody="Show similar products"
              customStyles="   mt-3"
              imageSrc={rightArrow}
              // text="Expensive"
            />
            <FaqComponent
              altText="dasds"
              messageBody="See lighter product options"
              customStyles="mt-3"
              imageSrc={rightArrow}
              // text="No Limit"
            />
            <FaqComponent
              altText="dasds"
              messageBody="See lighter product options"
              customStyles="mt-3"
              imageSrc={rightArrow}
              // text="No Limit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame33;
