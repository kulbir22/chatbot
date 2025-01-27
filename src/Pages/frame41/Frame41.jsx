import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/Frame-7.png";
import user from "../../assets/images/user.png";
import location from "../../assets/images/location.png";
import MessageUser from "../../Components/MessageBox";
import rightIcon from "../../assets/images/arrow-narrow-right.svg";
import rightArrow from "../../assets/images/rightArrow.png";
import { CardData2 } from "../../utils/data";
import FaqComponent from "../../Components/FaqComponent";
import { CardChat } from "../../Components/CardChat/CardChat";

const Frame41 = () => {
  return (
    <>
      <FaqComponent
        altText="dasds"
        messageBody="Synthetic PVC"
        customStyles="   mt-3"
        imageSrc={rightArrow}
        text="Budget Friendly"
      />
      <FaqComponent
        altText="dasds"
        messageBody="Natural Wood"
        customStyles="   mt-3"
        imageSrc={rightArrow}
        text="Expensive"
      />
      <FaqComponent
        altText="dasds"
        messageBody="All Product"
        customStyles="mt-3"
        imageSrc={rightArrow}
        text="No Limit"
      />

      <div className="flex justify-end">
        <MessageUser
          imageSrc={user}
          customStyles="mt-5"
          messageBody="Synthetic PVC."
          Synthetic="bg-[#E8EDF2]"
          customClass="customClass"
        />
      </div>
      <MessageBox
        imageSrc={star}
        messageBody="Which design preference do you have in mind for your bathroom countertops?."
        customStyles="mt-5 mb-5"
      />

      <div>
        <div className="bg-white rounded-lg p-2">
          <div class="grid grid-cols-3 gap-4 mb-4">
            {CardData2.map((card, index) => (
              <CardChat
                key={index}
                title={card.title}
                image={card.image}
                pre={card.pre}
                CardTextCenter="text-center"
                rightIcon={rightIcon}
                // borderText="hidden"
                button1="hidden"
                button2="w-full justify-center"
              />
            ))}
          </div>
        </div>
      </div>
      <FaqComponent
        altText=""
        messageBody="Not Sure."
        customStyles="mt-3"
        imageSrc={rightArrow}
        text=""
        customBg="border-[#1D73F2] border"
      />
    </>
  );
};

export default Frame41;
