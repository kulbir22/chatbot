import image1 from "../../assets/images/floorthumb-1.png";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/Frame-7.png";
import rightArrow from "../../assets/images/rightArrow.png";
import FaqComponent from "../../Components/FaqComponent";
import UploadImage from "../../assets/images/house_upload.png";
export const Frame31 = () => {
  return (
    <>
      <div className="flex justify-end mb-5">
        <div class="max-w-sm  overflow-hidden p-3 rounded-xl bg-[#E8EDF2]">
          <img
            src="/src/assets/images/user.png"
            alt="user"
            class="w-[30px] h-auto cursor-pointer absolute -right-4 -mt-4"
          />
          <img class="w-full" src={image1} alt="Sunset in the mountains" />
          <p className="font-semibold text-base">Katella Ash</p>
          <p
            className="text-[#727681] text-xs pb-2 "
            style={{ borderBottom: "1px solid #CED9E3" }}
          >
            Luxury Vinyl Flooring
          </p>
          <div class="px-6 py-4 text-center ">
            <div className="text-end">I like this one</div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <MessageBox
          imageSrc={star}
          messageBody="You've selected the Bramlett Luxury Hardwood. What would you like to do next?"
          customStyles="mt-3"
        />

        <div>
          <FaqComponent
            altText="dasds"
            messageBody="Know more about the product"
            customStyles="   mt-3"
            imageSrc={rightArrow}
          />
          <FaqComponent
            altText="dasds"
            messageBody="Show similar products"
            customStyles="   mt-3"
            imageSrc={rightArrow}
          />
          <FaqComponent
            altText="dasds"
            messageBody="See lighter product options"
            customStyles="mt-3"
            imageSrc={rightArrow}
          />
          <FaqComponent
            altText="dasds"
            messageBody="See darker product options"
            customStyles="mt-3"
            imageSrc={rightArrow}
          />
        </div>
      </div>
      {/* <div>
        <h6 className="text-dark font-bold mb-5">
          Upload your room photo for real time preview
        </h6>
        <div className="bg-[#F5F9FE] border-[#C0D8FB] rounded-lg flex flex-col justify-center items-center py-5 border-dotted border-2">
          <img
            src={UploadImage}
            alt="Upload your room image"
            className="w-16 h-auto"
          />
          <h6 className="font-semibold">Upload your room image</h6>
          <p className="text-[12px] text-[#727681]">
            Drop your image here, or
            <span className="text-[#1D73F2] ms-2">browse</span>
          </p>
        </div>
      </div> */}
    </>
  );
};
