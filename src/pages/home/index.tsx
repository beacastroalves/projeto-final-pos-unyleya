import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

import { LuGamepad2 } from "react-icons/lu";
import { AiOutlineCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { IoFastFoodOutline, IoShirtOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

const itemsCategory = [
  {
    id: 0,
    title: "Jogos",
    icon: <LuGamepad2 />
  },
  {
    id: 1,
    title: "Roupas",
    icon: <IoShirtOutline />
  },
  {
    id: 2,
    title: "Veículos",
    icon: <AiOutlineCar />
  },
  {
    id: 3,
    title: "Ferramentas",
    icon: <VscTools />
  },
  {
    id: 4,
    title: "Comidas",
    icon: <IoFastFoodOutline />
  },
  {
    id: 5,
    title: "Presentes",
    icon: <AiOutlineGift />
  },
  {
    id: 6,
    title: "Outros",
    icon: <AiOutlineSync />
  }
];

const Home = () => {
  return (
    <UserTemplate>
      <h2>Itens recentes</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>

      <div className="bg-primary px-8 py-4 pb-8 rounded-lg mt-10 mb-10 shadow-lg">
        <h2 className="text-white text-[24px] mb-6">Categorias</h2>
        <div className="flex justify-around">
          {itemsCategory.map((category) => (
            <div className="flex flex-col  items-center cursor-pointer">
              <div className="bg-white w-[64px] h-[64px] rounded-full flex justify-center items-center text-[28px] mb-2">{category.icon}</div>
              <span className="text-white">{category.title}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>Anúncios</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>
    </UserTemplate>
  )
};

export default Home;