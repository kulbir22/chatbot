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
  const toggleClose = () => setModalOpen(isModalOpen);

  return (
    <>
      <div class="max-w-sm overflow-hidden shadow-lg bg-white rounded-xl p-2">
        <img class="w-full h-auto" src={image} alt="Sunset in the mountains" />
        <div class="py-4 text-center ">
          <div class={`font-semibold text-[16px] ${CardTextCenter}`}>
            {title}
          </div>
          <p className={`text-[12px] mb-2 text-[#727681] ${CardTextCenter}`}>
            {pre}
          </p>
          <div
            className={`${commonButton} flex md:gap-2 lg:justify-between md:flex-col lg:flex-row `}
          >
            <button
              className={`${button1} text-[#1D73F2] border-0  bg-[#1D73F20F] rounded-full  px-5 py-1 md:text-[14px] lg:text-[14px]`}
              onClick={toggleModal}
            >
              View details
            </button>

            <button
              className={`${button2}  flex items-center justify-center gap-1 text-[#1D73F2] border border-[#1D73F2] md:text-[14px] lg:text-[14px] py-1 px-5 rounded-full `}
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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center rounded-lg">
          <div className="bg-[#F7F8F9] lg:w-[90%] lg:h-auto md:w-[90%] md:h-[90%] rounded-lg md:block lg:flex relative p-4 md:gap-0 lg:gap-3">
            <div className="md:w-full lg:w-1/2 md:h-[auto] lg:h-auto">
              <div className="relative">
                <img
                  className="lg:w-full lg:h-[100%] md:h-[420px] md:w-full"
                  src={tile}
                  alt="cross"
                />
                <div className="absolute md:-bottom-2 lg:bottom-0 left-0 right-0 flex justify-center mb-4">
                  <button className="text-md bg-[#fff] px-10 py-2 rounded-full">
                    Click on Product to Zoom
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="popup-content">
                <button
                  className="absolute right-2 top-2 text-xl bg-[#fff] px-3 py-1 rounded-full"
                  onClick={() => setModalOpen(false)}
                >
                  X
                </button>
              </div>
            </div>
            <div class="rounded-lg md:w-full lg:w-1/2 text-gray-600 body-font bg-[#F7F8F9] overflow-y-auto lg:h-auto">
              <h1 class="text-4xl text-gray-800 sm:text-[24px] font-semibold title-font mb-3 mt-4">
                Lenexa Creek
              </h1>
              <p className="md:pb-5 ">
                Discover the subtle allure of Lenexa Creek Luxury Vinyl Planks,
                showcasing neutral blonde tones complemented by natural knots
                and grains.
              </p>

              <div>
                <div className="border border-[#DAE3F1] bg-[#F0F2F4] p-2 rounded-lg text-lg font-semibold">
                  Aesthetics Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                  <div>
                    <p className="text-[#727681] font-normal">Color</p>
                    <p className="font-semibold">Blonde</p>
                  </div>
                  <div>
                    <p className="text-[#727681] font-normal">
                      Shade Variations
                    </p>
                    <p className="font-semibold">HIGH</p>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-[#727681] font-normal">Style</p>
                  <p className="font-semibold">Wood</p>
                </div>
              </div>

              {/* technical details */}
              <div>
                <div className="border p-2 border-[#DAE3F1] bg-[#F0F2F4] rounded-lg text-lg font-semibold mb-3">
                  Technical Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                  <div>
                    <p className="text-[#727681] font-normal">Category</p>
                    <p className="font-semibold">Luxury Vinyl Flooring</p>
                  </div>
                  <div>
                    <p className="text-[#727681] font-normal">Thickness</p>
                    <p className="font-semibold">6.5MM</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                  <div>
                    <p className="text-[#727681] font-normal">Wear Layer</p>
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
                  <p className="text-[#727681] font-normal">Commercial Use</p>
                  <p className="font-semibold">Yes</p>
                </div>
              </div>
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
