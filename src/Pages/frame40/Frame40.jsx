import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/Frame-7.png";
import user from "../../assets/images/user.png";
import location from "../../assets/images/location.png";
import MessageUser from "../../Components/MessageUser";
import rightIcon from "../../assets/images/arrow-narrow-right.svg";
import { CardWithLocation } from "../../utils/data";

const Frame40 = () => {
  return (
    <>
      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Not Sure"
        customBg="bg-[#E8EDF2]"
      />
      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Synthetic PVC."
        customBg="bg-[#E8EDF2]"
      />
      <MessageBox
        imageSrc={star}
        messageBody="Could you please share your zip code or city so I can find the nearest store for you?."
        customStyles="mt-3"
      />
      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="30318"
        customBg="bg-[#E8EDF2]"
      />
      <MessageBox
        imageSrc={star}
        messageBody="The closest MSI showroom and MSI dealers to you are as follows:"
        customStyles="mt-3"
      />

      {CardWithLocation.map((item, index) => (
        <div key={index} className="flex bg-white p-2 rounded-xl gap-3 mt-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-[40px] h-[40px] cursor-pointer"
          />
          <div>
            <p className="text-[#171717] text-[16px] font-semibold">
              {item.title}
            </p>
            <p className="text-[#727681] text-[13px]">{item.pre}</p>
            <div className="flex gap-2 mt-3">
              {item.bottomText == "View website" && (
                <button className="text-[#1D73F2] border-0 bg-[#1D73F20F] rounded-full hover:bg-[#1D73F2] hover:text-[#fff] px-6 py-1">
                  {item.bottomText}
                </button>
              )}
              <button className="flex items-center gap-1 text-[#1D73F2] border border-[#1D73F2] py-1 px-6 rounded-full hover:bg-[#1D73F2] hover:text-[#fff]">
                Get Direction
                <img className="w-4 h-4" src={rightIcon} alt="rightIcon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Frame40;
