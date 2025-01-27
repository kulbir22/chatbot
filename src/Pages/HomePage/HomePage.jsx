import homepageLogo from "../../../src/assets/home_bottom_icons.png";
import arrowDown from "../../../src/assets/images/Button.png";
import { useState } from "react";
import ChatBotModal from "../../Components/ChatBotModal";

const HomePage = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true); // State to toggle between the images

  // Open and close modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleModal = () => setModalOpen((prevState) => !prevState);

  const toggleImage = () => {
    setIsLogoVisible((prevState) => !prevState); // Toggle between logo and arrow
  };

  return (
    <>
    
      <ChatBotModal modalOpen={modalOpen} closeModal={closeModal} />

      <div className="absolute bottom-0 right-0">
        {/* Show homepageLogo if isLogoVisible is true */}
        {isLogoVisible ? (
          <img
            src={homepageLogo}
            alt="homepage logo"
            className="w-20 h-full cursor-pointer"
            onClick={() => {
              toggleModal(); // Toggle the modal visibility
              toggleImage(); // Toggle between images
            }}
          />
        ) : (
          // Show arrowDown if isLogoVisible is false
          <img
            src={arrowDown}
            alt="arrow down"
            className="w-20 h-full cursor-pointer"
            onClick={() => {
              toggleModal(); // Toggle the modal visibility
              toggleImage(); // Toggle between images
            }}
          />
        )}
      </div>
    </>
  );
};
export default HomePage;
