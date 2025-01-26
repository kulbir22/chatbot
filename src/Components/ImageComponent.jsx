import React from "react";

function ImageComponent({
  imageSrc = "https://loremflickr.com/800/600/girl", 
  title = "Flooring", 
  description = "Find perfect flooring for your needs.", 
  buttonText = "", 
  link = "#", 
  customStyles = "mt-3"
}) {
  return (
    <div className="w-[286px] h-[237px]" style={{ boxShadow: '0px 8px 64px 0px rgba(3, 33, 79, 0.04)' }}>
      <a 
     
        className={`p-[12px] rounded-[12px] shadow-xl bg-white  flex flex-col items-center ${customStyles}`} 
        href={link}
      >
        <img 
          src={imageSrc} 
          alt={title} 
          className="shadow rounded-lg overflow-hidden border" 
        />
        <div className="mt-3">
          <h4 className="font-semibold text-base">{title}</h4>
          <p className="mt-2 text-gray-600 text-[13px]">{description}</p>
          <div className="">
            {buttonText ? (
                    <button 
                    type="button" 
                    className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 mt-5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                >
                    {buttonText}
                </button>
            ) : ''}
       
          </div>
        </div>
      </a>
    </div>
  );
}

export default ImageComponent;
