import update from "immutability-helper";
import { useCallback } from "react";
import Card from "./ImageCard";
import ImageDragDroopInp from "./ImageDragDropInp";
import { PropTypes } from "prop-types";
import { PhotoProvider, PhotoSlider } from "react-photo-view";
import { useState } from "react";

function ImageGallery({ images, setImages }) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  // for Dnd move card
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // image preview select item
  const selectedImage = (idx) => {
    setVisible(true);
    setIndex(idx - 1);
  };

  // render image card
  const renderCard = useCallback((image, idx) => {
    const { id, imageSrc, selected } = image || {};
    return (
      <Card
        key={id}
        index={idx}
        id={id}
        imageSrc={imageSrc}
        moveCard={moveCard}
        selected={selected}
        onClick={selectedImage}
        setImages={setImages}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-4 py-5">
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:[&>*:first-child]:row-span-2 md:[&>*:first-child]:col-span-2 md:[&>*:first-child]:h-[27rem] md:[&>*]:rounded-lg [&>*]:border [&>*]:w-full md:[&>*]:h-52 [&>*]:h-72 [&>*]:bg-gray-300">
        {images?.map((card, idx) => renderCard(card, idx))}
        <ImageDragDroopInp images={images} setImages={setImages} />
        <PhotoProvider>
          <PhotoSlider
            images={images.map((item) => ({
              src: item.imageSrc,
              key: item.id,
            }))}
            visible={visible}
            onClose={() => setVisible(false)}
            index={index}
            onIndexChange={setIndex}
          />
        </PhotoProvider>
      </div>
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.any,
  setImages: PropTypes.any,
};

export default ImageGallery;
