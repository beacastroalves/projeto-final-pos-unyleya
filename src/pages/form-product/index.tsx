import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormProduct = {
  name: string;
  brand: string;
  category: string;
  price: number;
  url1: string;
  url2: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  brand: Yup.string().required("Campo obrigatório"),
  category: Yup.string().required("Campo obrigatório"),
  price: Yup.number().required("Campo obrigatório"),
  url1: Yup.string().required("Campo obrigatório"),
  url2: Yup.string().required("Campo obrigatório"),
});

const FormProduct = () => {

  const {
    register,
    formState: { errors },
  } = useForm<FormProduct>({ resolver: yupResolver(schemaValidation) });

  return (
    <AdminTemplate>
      <h1 className="text-[20px] my-8 max-w-[900px] w-full px-12">Novo Produto</h1>
      <div className="max-w-[900px] bg-white py-8 px-16 rounded-lg shadow-lg w-full flex flex-col gap-4 self-center">
        <p className="py-4">Preencha todos os campos abaixo:</p>
        <form className="">
          <div className="flex gap-4">
            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <input
                {...register("name")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
                placeholder="Nome do Produto"
              />
              { errors.name && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.name.message }</span>
              )}
            </div>

            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <input
                {...register("brand")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
                placeholder="Fabricante"
              />
              { errors.brand && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.brand.message }</span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <select
                {...register("category")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              >
                <option disabled selected value="">Selecione a Categoria</option>
                <option value={"jogos"}>Jogos</option>
                <option value={"roupas"}>Roupas</option>
                <option value={"veiculos"}>Veiculos</option>
                <option value={"ferramentas"}>Ferramentas</option>
                <option value={"comida"}>Comida</option>
                <option value={"presentes"}>Presentes</option>
                <option value={"outros"}>Outros</option>
              </select>
              { errors.category && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.category.message }</span>
              )}
            </div>

            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <input
                {...register("price")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
                placeholder="Preço do Produto"
              />
              { errors.price && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.price.message }</span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <input
                {...register("url1")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
                placeholder="URL 1 da imagem"
              />
              { errors.url1 && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.url1.message }</span>
              )}
            </div>

            <div className="flex-1 w-full min-h-[70px] h-[70px]">
              <input
                {...register("url2")}
                className="border-2 border-gray-200 w-full rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
                placeholder="URL 2 da imagem"
              />
              { errors.url2 && (
                <span className="text-red-700 text-[12px] ml-2">{ errors.url2.message }</span>
              )}
            </div>
          </div>

          <div className="flex-1 w-full min-h-[70px] h-[350px] ">
            <textarea className="outline-gray-300 w-full min-h-[100%] border-2 border-gray-200 rounded-lg p-4 shadow-sm" ></textarea>
          </div>
          <button
            className="bg-primary text-white w-full border-2 border-primary rounded-lg py-2 px-4 mt-8 mb-4 cursor-pointer transition duration-200 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </AdminTemplate>
  )
};

export default FormProduct;