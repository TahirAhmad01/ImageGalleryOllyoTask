import { PhotoProvider, PhotoSlider } from "react-photo-view";
import { PropTypes } from "prop-types";

function ImagePreview({ images, visible, setVisible, index, setIndex }) {
  return (
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
  );
}

ImagePreview.propTypes = {
  images: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  index: PropTypes.number,
  setIndex: PropTypes.func,
};

export default ImagePreview;
