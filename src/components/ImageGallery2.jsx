import { any } from "prop-types";
import { useDrag, useDrop } from "react-dnd";

function ImageGallery({ imageList, id }) {
  console.log(id)
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "image",
    item: { id: imageList.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => BoardImageList(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const BoardImageList = (id) => {
    console.log(id);
  };

  return (
    <div className="grid grid-cols-5 gap-4" ref={drop}>
      {imageList.map((image, idx) => (
        <div
          key={idx}
          className="border border-2 rounded-lg bg-gray-300 overflow-hidden relative block"
          ref={dragRef}
          style={{ border: isDragging ? "2px solid black" : "" }}
        >
          <input
            id={`bordered-checkbox-${idx}`}
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 absolute top-3 left-3"
          />
          <img
            src={image.image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="border border-2 rounded-lg bg-gray-300 flex justify-center items-center h-full w-full">
        Add image
      </div>
    </div>
  );
}

ImageGallery.propTypes = {
  imageList: any,
  id: any,
};

export default ImageGallery;
