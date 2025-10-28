import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";
import CardProductAdmin from "../../components/card-product-admin";

const UserProducts = () => {

  const navigate = useNavigate();

  return (
    <AdminTemplate>
      <div className="flex flex-col mt-10 m-4">
        <div className="flex justify-between items-center mx-6">
          <h1 className="text-[20px]">Anuncios</h1>
          <button onClick={() => navigate('/form-product')} className="bg-secondary text-white px-8 py-2 rounded-md cursor-pointer transition duration-300 hover:drop-shadow-md hover:brightness-105 active:brightness-98 active:translate-[1px] active:drop-shadow-lg">Adicionar</button>
        </div>
        <div className="flex flex-wrap justify-between mt-8 w-full">
          {
            Array.from({ length: 4 }).map(() => (
              <CardProductAdmin />
            ))
          }
        </div>
        <p className="self-end mx-6">4 itens</p>
      </div>
    </AdminTemplate>
  )
};

export default UserProducts;