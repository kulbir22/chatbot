import React from "react";

function MessageBox({
  imageSrc,
  altText,
  messageTitle,
  messageBody,
  img,
  Synthetic,
  customStyles = "",
  customClass = "",
}) {
  return (
    <div className={`relative flex gap-[10px] ${customStyles} `}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className={`${customClass} w-[35px] h-auto cursor-pointer absolute -left-10 mt-1`}
        />
      ) : (
        ""
      )}
      <div
        className={` p-[12px] rounded-[12px] ${Synthetic} bg-white`}
        style={{ boxShadow: "0px 8px 64px 0px #03214F0A" }}
      >
        {messageTitle && <p className="">{messageTitle}</p>}
        <p className=" ">{messageBody}</p>
        {img && (
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          // <img
          //   src={img}
          //   alt={altText}
          //   className="w-[45px] h-auto cursor-pointer"
          // />
        )}
      </div>
    </div>
  );
}

export default MessageBox;
