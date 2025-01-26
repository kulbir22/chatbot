import UploadImage from "../../assets/images/house_upload.png";
import imageFile from "../../assets/images/upload-image-file.png";
import user from "../../assets/images/user.png";
import MessageUser from "../../Components/MessageBox";

export const Frame32 = () => {
  return (
    <div className="px-3 py-3">
      <div className="bg-white px-[12px] pb-3 rounded-xl">
        <h6 className="text-dark font-bold mb-5 pt-2">
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
      </div>
      <div>
        <img
          src={user}
          alt="user"
          className="w-[30px] h-auto cursor-pointer absolute -right-2"
        />
        <div className="scanner-imageFile">
          <div className="bg-[#E8EDF2] p-4 rounded-lg">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2020/05/14155258/modern-bedroom-designs-in-bangalore-mumbai-hyderabad.jpg.jpg"
              alt="Upload your room image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="scanner"></div>
        </div>
      </div>
    </div>
  );
};
