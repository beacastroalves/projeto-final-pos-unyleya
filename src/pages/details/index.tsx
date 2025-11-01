import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { getApiProductsById } from "./services";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import DetailsLoading from "../../components/details-loading";
import { toast } from "react-toastify";

const Details = () => {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<Product>({} as Product);

  const [isLoadingDetailsProducts, setIsLoadingDetailsProducts] = useState(false);

  const getDetailsProduct = async () => {
    setIsLoadingDetailsProducts(true);
    try {
      const response = await getApiProductsById(id ?? "");

      setProduct(response.data);
    } catch (error) {
      toast.error(`Erro ao buscar dados do produto | ${error}`)
    }
    setIsLoadingDetailsProducts(false);
  };

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

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <UserTemplate>
      { isLoadingDetailsProducts && <DetailsLoading /> }
      <h1 className="text-[24px] font-bold mt-10">{product.name}</h1>
      <div className="flex gap-4 mt-8 mb-14">
        <div className="flex-1 bg-white items-center justify-center rounded-md">
          <Carousel showThumbs={false} emulateTouch={true} className="p-10 min-w-[400px]">
            <div >
              <img src={product.url1} alt={`Imagem 1 do produto ${product.name}`} />
            </div>
            <div>
              <img src={product.url2} alt={`Imagem 1 do produto ${product.name}`} />
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-white w-full px-6 p-4 rounded-md">
            <h3 className="font-bold text-[16px] mb-4">Informações do Vendedor</h3>
            <p className="mb-2">#Nome do vendedor</p>
            <p className="mb-2">#Localidade do vendedor</p>
            <p className="mb-2">Email: <span>#email@email.com</span></p>
            <p className="mb-2">Telefone: <span>#(85) 99123-4567</span></p>
          </div>
          <div className="bg-white w-full h-full px-6 p-4 rounded-md flex flex-col justify-center items-center">
            <small className="self-start">Preço</small>
            <p className="flex justify-center items-center text-[32px] font-medium">R$ {formatPrice(product.price)}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[18px] mb-8">Descrição</p>
        <p className="text-gray-600 mb-20 leading-7 text-justify" dangerouslySetInnerHTML={{__html: product.description}}></p>
      </div>
    </UserTemplate>
  )
};

export default Details;