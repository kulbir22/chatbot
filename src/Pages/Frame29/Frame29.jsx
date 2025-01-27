import { CardChat } from "../../Components/CardChat/CardChat";
import { CardData, CardDataBottm } from "../../utils/data";

export const Frame29 = () => {
  return (
    <div className="card-data">
      <div className="mb-5">
        <div class="grid grid-cols-2 gap-4 mb-4">
          {CardData.map((card, index) => (
            <CardChat
              key={index}
              title={card.title}
              image={card.image}
              pre={card.pre}
              CardTextCenter="text-center"
              // borderText="hidden"
            />
          ))}
        </div>
        <div className="w-full text-center">
          <button className="bg-[#1D73F2] text-white px-5 py-2 rounded-full hover:bg-[#1D73F2] hover:text-[#fff]">
            View All Options
          </button>
        </div>
      </div>
      {CardDataBottm.map((card, index) => (
        <div className="flex justify-end">
          <CardChat
            key={index}
            title={card.title}
            image={card.image}
            pre={card.pre}
            bottomText={card.bottomText}
            commonButton="hidden"
            CardTextCenter="text-start"
            borderHidden="border-2 border-b border-bottom mb-3"
          />
        </div>
      ))}
    </div>
  );
};
