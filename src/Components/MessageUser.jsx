import React from "react";

function MessageUser({
  imageSrc,
  altText,
  messageTitle,
  messageBody,
  customStyles = "",
  customBg = "",
}) {
  return (
    <div className={`flex justify-end  gap-[10px] ${customStyles}`}>
      <div className={`p-[12px] rounded-[12px] ${customBg}`}>
        {messageTitle && <p className="font-bold">{messageTitle}</p>}
        <p>{messageBody}</p>
      </div>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className="w-[26px] h-[26px] cursor-pointer absolute -right-5 mt-1"
        />
      ) : (
        <div className="w-[26px] h-[26px]"></div> // Empty div placeholder
      )}
    </div>
  );
}

export default MessageUser;
