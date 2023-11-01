import PropTypes from "prop-types";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

function ImageCard({ id, index, imageSrc, moveCard }) {
  const ref = useRef(null);

  const [{ isDrop }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        insDrop: !!monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div
      className={`border border-2 rounded-lg bg-gray-300 overflow-hidden relative block ${isDrop && "opacity-20"}`}
      ref={ref}
      style={{ border: isDragging ? "2px solid black" : "" }}
    >
      <input
        type="checkbox"
        value=""
        name="bordered-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 absolute top-3 left-3"
      />
      <img src={imageSrc} alt="image" className="w-full h-full object-cover" />
    </div>
  );
}

ImageCard.propTypes = {
  id: PropTypes.any,
  index: PropTypes.any,
  imageSrc: PropTypes.any,
  moveCard: PropTypes.any,
};


export default ImageCard;
