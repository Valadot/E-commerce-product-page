import SneakerImage from "../../../ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";

interface Product {
  picture: string;
  name: string;
  price: number;
  id: number;
}

export const Sneaker: Product = {
  picture: SneakerImage,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  id: 1,
};
