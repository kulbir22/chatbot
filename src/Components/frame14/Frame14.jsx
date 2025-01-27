import React from "react";
import MessageBox from "../MessageBox";
import ImageComponent from "../ImageComponent";
import star from "../../assets/images/Frame-7.png";
import user from "../../assets/images/user.png";
import MessageUser from "../MessageUser";
import loadingImage from "../../assets/images/Group.png";

const Frame14 = () => {
  return (
    <>
      <MessageUser
        imageSrc={user}
        customStyles="mt-20"
        messageBody="Flooring."
        customBg="bg-[#E8EDF2]"
      />

      <MessageBox imageSrc={star} altText="fsdfds" img={loadingImage} />
    </>
  );
};

export default Frame14;
