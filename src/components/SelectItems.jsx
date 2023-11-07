import { PropTypes } from "prop-types";
import logo from "../assets/image/logo.svg";

function SelectItems({ images, setImages }) {
  const selectedItemCount = images.filter((image) => image.selected).length;

  // Function for check all images are selected
  const areAllImagesSelected = images.every((image) => image.selected);

  // Function for selected image delete
  const handleImageClick = () => {
    const updatedImages = images.filter((image) => !image.selected);
    setImages(updatedImages);
  };

  // Function for selected image deselect & selected all images
  const handelImageSelectDeselect = (selected) => {
    const updatedImages = images.map((image) => ({
      ...image,
      selected: selected,
    }));

    setImages(updatedImages);
    // !setChecked;
  };

  return (
    <>
      {selectedItemCount > 0 ? (
        <div className="w-full flex justify-between items-center px-5 py-4 border-b">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              value=""
              name="bordered-checkbox"
              onChange={() => handelImageSelectDeselect(false)}
              checked
              readOnly
              id="checkbox"
              className=" w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
            />
            <label
              className="font-semibold text-xs sm:text-lg hover:cursor-pointer"
              htmlFor="checkbox"
            >
              {selectedItemCount} items selected
            </label>
          </div>
          <div className="flex gap-1 md:gap-3">
            <button
              type="button"
              className="px-3 md:px-7 py-2 md:py-2 text-xs sm:text-sm font-semibold rounded-3xl bg-gray-100 hover:bg-blue-600 hover:text-white text-blue-600"
              onClick={() => handelImageSelectDeselect(!areAllImagesSelected)}
            >
              {areAllImagesSelected ? "Deselect All" : "Select All"}
            </button>
            <button
              type="button"
              className="px-3 md:px-7 py-2 md:py-2 text-xs sm:text-sm font-semibold rounded-3xl bg-red-100 hover:bg-red-600 hover:text-white text-red-600"
              onClick={handleImageClick}
            >
              Delete Files
            </button>
          </div>
        </div>
      ) : (
        <div className="px-5 py-4 border-b text-xl font-semibold flex items-center gap-2">
          <img src={logo} className="w-9" />
          Image Gallery
        </div>
      )}
    </>
  );
}

SelectItems.propTypes = {
  selectedCount: PropTypes.number,
  images: PropTypes.any,
  setImages: PropTypes.any,
};

export default SelectItems;
