import ImageCard, { ImageCardProps } from "./imageCard";

type ImageGalleryProps = {
  items: ImageCardProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  return (
    <div className="flex justify-center">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {items.map((item, index) => (
          <ImageCard key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
