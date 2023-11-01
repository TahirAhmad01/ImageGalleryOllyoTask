import ImageGallery from "./components/ImageGallery";
import SelectItems from "./components/SelectItems";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl m-auto py-5">
        <div className="bg-white rounded-lg shadow-md">
          <SelectItems />
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}

export default App;
