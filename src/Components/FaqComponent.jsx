import React from "react";

function FaqComponent({
  imageSrc,
  altText,
  messageTitle,
  messageBody,
  text,
  customStyles = "",
  customBg = "",
  border
}) {
  return (
    <div className={`flex rounded-[12px]  gap-[10px] ${customStyles} ${border}`}>
      <div
        className={`flex justify-between items-center bg-white w-full  py-[10px] px-[16px] rounded-[100px] ${customBg}`}
      >
        <div className="flex items-center justify-between gap-4">
          {messageTitle && <p className="font-bold">{messageTitle}</p>}
          <p>{messageBody}</p>
          {text && (
            <p className="border border-[#755AEE] text-[#755AEE] px-[8px] py-[4px] text-[12px] rounded-full">
              {text}
            </p>
          )}
        </div>

        <img
          src={imageSrc}
          alt={altText}
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FaqComponent;
