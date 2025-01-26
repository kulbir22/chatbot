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
        <div className="border-[#E9EEF7] border rounded-t-lg p-2 mb-5 bg-[#F7F8F9]">
          <div className="flex justify-center space-x-4">
            <button
              className={`px-3 py-1 ${
                activeTab === "tab1"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff]"
                  : "border-none hover:bg-[#fff]"
              } focus:outline-none tab-button`}
              onClick={() => handleTabClick("tab1")}
            >
              Description
            </button>
            <button
              className={`px-3 py-1 ${
                activeTab === "tab2"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff]"
                  : "border-none hover:bg-[#fff]"
              } focus:outline-none tab-button`}
              onClick={() => handleTabClick("tab2")}
            >
              Specifications
            </button>
            <button
              className={`px-3 py-1 ${
                activeTab === "tab3"
                  ? "border-[#1D73F2] text-[#1D73F2] hover:bg-[#fff]"
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
                    class="w-4 h-4 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                  </svg>
                </button>

                <div class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Variations
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
            <div className="flex  gap-[200px] p-2">
              <div>
                <p className="text-[#727681] font-normal">Color</p>
                <p className="font-semibold">Blonde</p>
              </div>
              <div>
                <p className="text-[#727681] font-normal">Thickness</p>
                <p className="font-semibold">6.5MM</p>
              </div>
            </div>
            <div className="flex  gap-[200px] p-2">
              <div>
                <p className="text-[#727681] font-normal">Wear Layer</p>
                <p className="font-semibold">20MIL</p>
              </div>
              <div>
                <p className="text-[#727681] font-normal">Series Names</p>
                <p className="font-semibold">Prescott</p>
              </div>
            </div>
            <div className="p-2">
              <p className="text-[#727681] font-normal">
                Environmental Certifications
              </p>
              <p className="font-semibold">
                NSF Certified, Greenguard Gold, FloorScore, USGBC LEED Certified
              </p>
            </div>
            <div className="p-2">
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
