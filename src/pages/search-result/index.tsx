import { Link, useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiProductsByNames } from "./services";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";

const SearchProducts = () => {

  const params = useParams();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const nameProduct = params?.product;

  const getProductsByName = async () => {
    setIsLoadingProducts(true);
    try {
    const response = await getApiProductsByNames(nameProduct ?? "");
    setAllProducts(response.data);
    } catch (error) {
      alert(`Houve um erro ao buscar todos os produtos recentes | ${error}`);
    }
    setIsLoadingProducts(false);
  };

  useEffect(() => {
    getProductsByName();
  }, []);

  return (
    <UserTemplate>
      <h1 className="mt-10 m-4 text-[24px]">Resultado da busca</h1>

      { isLoadingProducts && <ListLoading /> }
      <div className="flex flex-wrap">
        {
          allProducts.map((product) => (
            <CardProduct
              key={product._id}
              price={product.price}
              name={product.name}
              manufacturer={product.manufacturer}
              img={product.url1}
            />
          ))
        }
      </div>
      <div className="flex items-center justify-between mx-4">
        <Link to="/all-products" className="flex text-gray-700 cursor-pointer p-1 border-b-1 border-transparent hover:border-gray-700">
          <p>Voltar para todos os produtos</p>
        </Link>
        <p className="self-end m-4">{allProducts.length > 1 ? `${allProducts.length} itens` : `${allProducts.length} item`}</p>
      </div>
    </UserTemplate>
  )
};

export default SearchProducts;