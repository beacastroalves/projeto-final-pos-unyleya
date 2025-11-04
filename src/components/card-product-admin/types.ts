export type ProductCardAdmin = {
  _id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
  url1: string;
  url2: string;
  description: string;
};

export type CardProps = {
  id: string;
  name: string;
  img: string;
  manufacturer: string;
  price: number;
  setMyProducts: React.Dispatch<React.SetStateAction<ProductCardAdmin[]>>
};