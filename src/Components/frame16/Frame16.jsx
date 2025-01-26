import React, { useState } from "react";
import MessageBox from "../MessageBox";
import ImageComponent from "../ImageComponent";
import star from "../../assets/images/Frame-7.png";
import crossbutton from "../../assets/images/crossButton.png";
import user from "../../assets/images/user.png";
import MessageUser from "../MessageUser";
import loadingImage from "../../assets/images/loadingImage.png";
import { CardData, CardDataBottm, Recommended_Options } from "../../utils/data";
import { CardChat } from "../CardChat/CardChat";
import rightIcon from "../../assets/images/arrow-narrow-right.svg";

const Frame16 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <>
      <MessageBox
        imageSrc={star}
        messageBody="Here are best flooring options that suits."
        customStyles="mb-5"
      />

      <div className="card-data">
        <div className="mb-5">
          <div class="grid grid-cols-2 gap-4 mb-4">
            {CardData.map((card, index) => (
              <CardChat
                key={index}
                title={card.title}
                image={card.image}
                pre={card.pre}
                CardTextCenter="text-center"
                rightIcon={rightIcon}
                // borderText="hidden"
              />
            ))}
          </div>
          <div className="w-full text-center">
            <button
              className="bg-[#1D73F2] text-white px-5 py-2 rounded-full hover:bg-[#1D73F2] hover:text-[#fff]"
              onClick={toggleModal}
            >
              View All Options
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex  items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[87%] h-[90%] flex flex-col">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">Recommended Options </h2>
              <img
                class=" cursor-pointer w-[32px] h-[32px]"
                src={crossbutton}
                onClick={toggleModal}
                alt="cross"
              />
            </div>
            <div className="flex-grow overflow-y-auto ">
              <div class="py-3 grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 overflow-y-scroll overflow-hidden  ">
                {Recommended_Options.map((card, index) => (
                  <CardChat
                    key={index}
                    title={card.title}
                    image={card.image}
                    pre={card.pre}
                    CardTextCenter="text-center"
                    rightIcon={rightIcon}
                    // borderText="hidden"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Frame16;
