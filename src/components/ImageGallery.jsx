import update from "immutability-helper";
import { useCallback, useState } from "react";
import Card from "./ImageCard";
import imageLists from "../utils/dummyImages.json";

function ImageGallery() {
  const [cards, setCards] = useState([...imageLists]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  console.log(cards);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        imageSrc={card.image}
        moveCard={moveCard}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-4 [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2 [&>*:first-child]:h-[27rem] [&>*]:rounded-lg [&>*]:border [&>*]:w-full [&>*]:h-52 [&>*]:bg-gray-300">
        {cards.map((card, i) => renderCard(card, i))}
        <div className="border border-2 rounded-lg bg-gray-300 flex justify-center items-center h-full w-full">
          Add image
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
