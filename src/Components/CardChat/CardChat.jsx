import { useState } from "react";
import crossbutton from "../../assets/images/crossButton.png";
import tile from "../../assets/images/tile.png";
import fullexpand from "../../assets/images/full-expand.png";

export const CardChat = ({
  title,
  image,
  pre,
  commonButton,
  CardTextCenter,
  bottomText,
  borderHidden,
  rightIcon,
  button1,
  button2,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
      <div class="max-w-sm   overflow-hidden shadow-lg bg-white rounded-xl">
        <img class="w-full p-2" src={image} alt="Sunset in the mountains" />
        <div class="px-3 py-4 text-center ">
          <div class={`font-semibold text-[16px] ${CardTextCenter}`}>
            {title}
          </div>
          <p className={`text-[12px] mb-2 text-[#727681] ${CardTextCenter}`}>
            {pre}
          </p>
          <div
            className={`${commonButton} flex md:gap-3 lg:justify-between md:flex-col lg:flex-row `}
          >
            <button
              className={`${button1} text-[#1D73F2] border-0  bg-[#1D73F20F] rounded-full  px-4 py-1`}
              onClick={toggleModal}
            >
              View details
            </button>

            <button
              className={`${button2}  flex items-center justify-center gap-1 text-[#1D73F2] border border-[#1D73F2] py-1 px-[10px] rounded-full `}
            >
              I like this
              <img class=" w-auto h-auto" src={rightIcon} alt="rightIcon" />
            </button>
          </div>

          <div className={`${borderHidden}`}></div>
          <div className={`text-end`}>{bottomText}</div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex  items-center justify-center z-50">
          <div className="bg-[#F7F8F9]  rounded-lg px-6 pb-6 pt-2 md:w-[87%] md:h-[100%] lg:h-auto flex flex-col">
            <div className="flex justify-end">
              <img
                class=" cursor-pointer w-[32px] h-[32px] "
                src={crossbutton}
                onClick={toggleModal}
                alt="cross"
              />
            </div>
            <div className="flex-grow">
              <section class="text-gray-600 body-font bg-[#F7F8F9] rounded-lg">
                <div class="container flex flex-col lg:flex-row w-full">
                  <div>
                    {isPopupVisible && (
                      <div className="popup relative">
                        <div className="popup-content">
                          <button
                            className="absolute right-5 top-3 text-xl bg-[#fff] px-3 py-1 rounded-full"
                            onClick={handleClosePopup}
                          >
                            X
                          </button>
                          <img className="popup-image" src={tile} alt="cross" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="md:w-full lg:w-1/2 relative">
                    <img
                      className="w-12 h-auto absolute right-2 top-2 bg-[#fff] px-3 py-3 rounded-md cursor-pointer"
                      src={fullexpand}
                      alt="cross"
                      onClick={handleOpenPopup}
                    />
                    <img
                      class="w-full md:h-[350px] lg:h-[100%]"
                      src={tile}
                      alt="cross"
                    />
                  </div>
                  <div class=" md:mt-5 lg:mt-0 lg:w-1/2 lg:p-8 overflow-y-auto md:h-[350px] lg:h-auto">
                    <h1 class="text-4xl text-gray-800 sm:text-[24px] font-semibold title-font ">
                      Lenexa Creek
                    </h1>
                    <p className="md:pb-5 ">
                      Discover the subtle allure of Lenexa Creek Luxury Vinyl
                      Planks, showcasing neutral blonde tones complemented by
                      natural knots and grains.
                    </p>

                    <div className="pb-5">
                      <div className="border border-[#DAE3F1] bg-[#F0F2F4] p-2 rounded-lg text-lg font-semibold">
                        Aesthetics Details
                      </div>
                      <div className="flex  gap-[200px] p-2">
                        <div>
                          <p className="text-[#727681] font-normal">Color</p>
                          <p className="font-semibold">Blonde</p>
                        </div>
                        <div>
                          <p className="text-[#727681] font-normal">Color</p>
                          <p className="font-semibold">Blonde</p>
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-[#727681] font-normal">Color</p>
                        <p className="font-semibold">Blonde</p>
                      </div>
                    </div>

                    {/* technical details */}
                    <div>
                      <div className="border border-[#DAE3F1] bg-[#F0F2F4] p-2 rounded-lg text-lg font-semibold">
                        Technical Details
                      </div>
                      <div className="flex  gap-[200px] p-2">
                        <div>
                          <p className="text-[#727681] font-normal">Category</p>
                          <p className="font-semibold">Luxury Vinyl Flooring</p>
                        </div>
                        <div>
                          <p className="text-[#727681] font-normal">
                            Thickness
                          </p>
                          <p className="font-semibold">6.5MM</p>
                        </div>
                      </div>
                      <div className="flex  gap-[200px] p-2">
                        <div>
                          <p className="text-[#727681] font-normal">
                            Wear Layer
                          </p>
                          <p className="font-semibold">20MIL</p>
                        </div>
                        <div>
                          <p className="text-[#727681] font-normal">
                            Residential Use
                          </p>
                          <p className="font-semibold">Yes</p>
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-[#727681] font-normal">
                          Commercial Use
                        </p>
                        <p className="font-semibold">Yes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CardChat.defaultProps = {
  borderHidden: "",
  commonButton: "",
  CardTextCenter: "",
  CardTextEnd: "",
  bottomText: "",
};
