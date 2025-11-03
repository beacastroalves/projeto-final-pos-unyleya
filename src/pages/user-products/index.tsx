import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";
import CardProductAdmin from "../../components/card-product-admin";
import { getApiMyProducts } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useEffect, useState } from "react";
import type { Product } from "./types";

const UserProducts = () => {

  const navigate = useNavigate();

  const { token } = useAuthSessionStore();

  const [myProducts, setMyProducts ] = useState<Product[]>([]);

  const getMyProducts = async () => {
    try {
      const response = await getApiMyProducts(token);
      setMyProducts(response.data);
    } catch (error) {
      alert(`Erro ao buscar produtos do usuário | ${error}`);
    }
  }

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <AdminTemplate>
      <div className="flex flex-col mt-10 m-4">
        <div className="flex justify-between items-center mx-6">
          <h1 className="text-[20px]">Anuncios</h1>
          <button onClick={() => navigate('/form-product')} className="bg-secondary text-white px-8 py-2 rounded-md cursor-pointer transition duration-300 hover:drop-shadow-md hover:brightness-105 active:brightness-98 active:translate-[1px] active:drop-shadow-lg">Adicionar</button>
        </div>
        <div className="flex flex-wrap justify-between mt-8 w-full">
          {
            myProducts.map((product) => (
              <CardProductAdmin
                key={product._id}
                id={product._id}
                name={product.name}
                img={product.url1}
                manufacturer={product.manufacturer}
                price={product.price}
              />
            ))
          }
        </div>
        <p className="self-end mx-6">{myProducts.length === 1 ? '1 item' : `${myProducts.length} itens`}</p>
      </div>
    </AdminTemplate>
  )
};

export default UserProducts;