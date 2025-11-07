import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { getApiProductsById } from "./services";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import DetailsLoading from "../../components/details-loading";
import { toast } from "react-toastify";
import { formatPrice } from "../../utils/format-price";

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

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <UserTemplate>
      { isLoadingDetailsProducts && <DetailsLoading /> }
      <h1 className="text-[24px] font-bold mt-10">{product.name}</h1>
      <div className="flex gap-4 mt-8 mb-14">
        <div className="flex-1 bg-white flex items-center justify-center rounded-md p-16 max-w-[500px] max-h-[500px]">
          <Carousel showThumbs={false} emulateTouch={true} className="flex items-center justify-center w-full">
            <div className="w-fit">
              <img className="w-full" src={product.url1} alt={`Imagem 1 do produto ${product.name}`} />
            </div>
            <div className="w-fit">
              <img className="w-full" src={product.url2} alt={`Imagem 1 do produto ${product.name}`} />
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-white w-full px-6 p-4 rounded-md min-h-[300px]">
            <h3 className="font-bold text-[16px] mb-4">Informações do Vendedor</h3>
            <p className="mb-2">{product.user?.name || "-"}</p>
            <p className="mb-2">{product.user?.city} - {product.user?.state}</p>
            <p className="mb-2">Email: <span>{product.user?.email}</span></p>
            <p className="mb-2">Telefone: <span>{product.user?.phone}</span></p>
          </div>
          <div className="bg-white w-full h-full px-6 p-4 rounded-md flex flex-col justify-center items-center">
            <small className="self-start">Preço</small>
            <p className="flex justify-center items-center text-[32px] font-medium">{formatPrice(product.price)}</p>
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