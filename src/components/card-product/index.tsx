import { useNavigate } from "react-router-dom";
import type { CardProps } from './types';

const formatPrice = (value: string | number) => {
  const str = (+`${value}`).toFixed(2).replace('.', ',');
  if (str.length <= 6) {
      return str;
  }
  const index = str.length - 6;
  const thousands = str.substring(0, index);
  const remainder = str.substring(index);

  return `${thousands}.${remainder}`;
};

const CardProduct = (props: CardProps) => {

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/products/details/${props.id}`)} className="flex flex-col items-center justify-between p-6 my-4 mx-2 shadow-md rounded-md h-[400px] w-[230px] border-2 border-gray-50 bg-white cursor-pointer">
      <h1 className="text-[16px] font-bold mb-1 w-full text-left">{props.name}</h1>

      <img className="max-h-[150px] my-3" src={props.img} alt={`imagem meramente ilustrativa de um ${props.name}`} />
      <div className="self-start">
        <p className="w-full mt-3 text-[14px] text-left mb-1">{props.manufacturer}</p>
        <p className="w-full text-[24px] text-left">R$ {formatPrice(props.price)}</p>
      </div>
    </button>
  )
};

export default CardProduct;