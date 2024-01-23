import Sneaker1 from "../../../ecommerce-product-page-main/images/image-product-1.jpg";
import Sneaker2 from "../../../ecommerce-product-page-main/images/image-product-2.jpg";
import Sneaker3 from "../../../ecommerce-product-page-main/images/image-product-3.jpg";
import Sneaker4 from "../../../ecommerce-product-page-main/images/image-product-4.jpg";
import SneakerThumbnail1 from "../../../ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import SneakerThumbnail2 from "../../../ecommerce-product-page-main/images/image-product-2-thumbnail.jpg";
import SneakerThumbnail3 from "../../../ecommerce-product-page-main/images/image-product-3-thumbnail.jpg";
import SneakerThumbnail4 from "../../../ecommerce-product-page-main/images/image-product-4-thumbnail.jpg";

export interface Image {
  original: string;
  thumbnail: string;
}

const images: Image[] = [
  {
    original: Sneaker1,
    thumbnail: SneakerThumbnail1,
  },
  {
    original: Sneaker2,
    thumbnail: SneakerThumbnail2,
  },
  {
    original: Sneaker3,
    thumbnail: SneakerThumbnail3,
  },
  {
    original: Sneaker4,
    thumbnail: SneakerThumbnail4,
  },
];

export default images;
