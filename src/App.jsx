import { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import SelectItems from "./components/SelectItems";
import imageLists from "./utils/dummyImages.json";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  const [images, setImages] = useState([...imageLists]);
  const selectedItemCount = images.filter((image) => image.selected).length;

  return (
    <div className="bg-gray-100 min-h-screen light">
      <div className="max-w-screen-xl m-auto py-5">
        <div className="bg-white rounded-lg shadow-md">
          <SelectItems
            selectedCount={selectedItemCount}
            images={images}
            setImages={setImages}
          />
          <ImageGallery images={images} setImages={setImages} />

          {/* <button
            onClick={() => {
              setVisible(true);
              console.log(visible);
            }}
          >
            Click
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
