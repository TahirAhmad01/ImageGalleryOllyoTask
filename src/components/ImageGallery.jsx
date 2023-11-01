import update from "immutability-helper";
import { useCallback, useState } from "react";
import Card from "./ImageCard";
import imageLists from "../utils/dummyImages.json";
import ImageDragDroopInp from "./ImageDragDropInp";

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

  const renderCard = useCallback((image, idx) => {
    return (
      <Card
        key={image.id}
        index={idx}
        id={image.id}
        imageSrc={image.image}
        moveCard={moveCard}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-4 py-5">
      <div className="grid grid-cols-5 gap-4 [&>*:first-child]:row-span-2 [&>*:first-child]:col-span-2 [&>*:first-child]:h-[27rem] [&>*]:rounded-lg [&>*]:border [&>*]:w-full [&>*]:h-52 [&>*]:bg-gray-300">
        {cards.map((card, idx) => renderCard(card, idx))}
        <ImageDragDroopInp />
      </div>
    </div>
  );
}

export default ImageGallery;
