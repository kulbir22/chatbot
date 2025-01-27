import { useState } from "react";

const TabsCard = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="p-4  bg-white shadow-md rounded-lg">
        {/* Tab Buttons */}
        <div className="border-[#E9EEF7] border rounded-lg p-2 mb-5 bg-[#F7F8F9]">
          <div className="flex justify-center space-x-4">
            <button
              className={`px-3 py-1 ${
                activeTab === "tab1"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff] bg-[#1d72f21f]"
                  : "border-none hover:bg-[#fff]"
              } focus:outline-none tab-button`}
              onClick={() => handleTabClick("tab1")}
            >
              Description
            </button>
            <button
              className={`px-3 py-1 ${
                activeTab === "tab2"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff] bg-[#1d72f21f]"
                  : "border-none hover:bg-[#fff]"
              } focus:outline-none tab-button`}
              onClick={() => handleTabClick("tab2")}
            >
              Specifications
            </button>
            <button
              className={`px-3 py-1 ${
                activeTab === "tab3"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff] bg-[#1d72f21f]"
                  : "border-none hover:bg-[#fff]"
              } focus:outline-none tab-button`}
              onClick={() => handleTabClick("tab3")}
            >
              Application
            </button>
            <div class="relative inline-block text-left">
              <div class="group">
                <button
                  className={`flex items-center px-3 py-1 ${
                    activeTab === "tab4"
                      ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff]"
                      : "border-none hover:bg-[#fff]"
                  } focus:outline-none tab-button`}
                  onClick={() => handleTabClick("tab4")}
                  type="button"
                >
                  Others
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.4107 6.9107C4.73614 6.58527 5.26378 6.58527 5.58921 6.9107L9.99996 11.3214L14.4107 6.9107C14.7361 6.58527 15.2638 6.58527 15.5892 6.9107C15.9147 7.23614 15.9147 7.76378 15.5892 8.08921L10.5892 13.0892C10.2638 13.4147 9.73614 13.4147 9.4107 13.0892L4.4107 8.08921C4.08527 7.76378 4.08527 7.23614 4.4107 6.9107Z"
                      fill={activeTab === "tab4" ? "#1D73F2" : "#171717"}
                    />
                  </svg>
                </button>

                <div class="absolute -left-[60px] w-40 bg-white  rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1D73F2] hover:border-l-2 hover:border-[#1D73F2] "
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1D73F2] hover:border-l-2 hover:border-[#1D73F2] "
                    >
                      Variations
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#1D73F2] hover:border-l-2 hover:border-[#1D73F2] "
                    >
                      Others
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`${activeTab === "tab1" ? "" : "hidden"}`}>
          <div>
            <div className="flex space-x-40 mb-3">
              <div>
                <p className="text-[#727681] font-normal">Color</p>
                <p className="font-semibold">Blonde</p>
              </div>
              <div>
                <p className="text-[#727681] font-normal">Thickness</p>
                <p className="font-semibold">6.5MM</p>
              </div>
            </div>
            <div className="flex space-x-32 mb-3">
              <div>
                <p className="text-[#727681] font-normal">Wear Layer</p>
                <p className="font-semibold">20MIL</p>
              </div>
              <div>
                <p className="text-[#727681] font-normal">Series Names</p>
                <p className="font-semibold">Prescott</p>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-[#727681] font-normal">
                Environmental Certifications
              </p>
              <p className="font-semibold">
                NSF Certified, Greenguard Gold, FloorScore, USGBC LEED Certified
              </p>
            </div>
            <div className="">
              <p className="text-[#727681] font-normal">Warranty</p>
              <p className="font-semibold">
                Lifetime Limited Residential, 20-Year Limited Light Commercial,
                15-Year Limited Commercial
              </p>
            </div>
          </div>
        </div>
        <div
          className={`p-4 tab-content bg-white shadow-md rounded-lg ${
            activeTab === "tab2" ? "" : "hidden"
          }`}
        >
          <p>
            Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis
            urna posuere quam porta consequat. Donec commodo diam lectus, sit
          </p>
        </div>
        <div
          className={`p-4 tab-content bg-white shadow-md rounded-lg ${
            activeTab === "tab3" ? "" : "hidden"
          }`}
        >
          <p>
            Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis
            urna posuere quam porta consequat. Donec commodo diam lectus, sit
          </p>
        </div>
        <div
          className={`p-4 tab-content bg-white shadow-md rounded-lg ${
            activeTab === "tab4" ? "" : "hidden"
          }`}
        >
          <p>
            Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis
            urna posuere quam porta consequat. Donec commodo diam lectus, sit
          </p>
        </div>
      </div>
    </>
  );
};
export default TabsCard;
