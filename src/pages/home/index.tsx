import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

import { LuGamepad2 } from "react-icons/lu";
import { AiOutlineCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { IoFastFoodOutline, IoSearch, IoShirtOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

import { Carousel } from "react-responsive-carousel";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { getApiRecentsProducts, getApiRecommendedsProducts } from "./services";
import { useState, useEffect } from "react";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast } from "react-toastify";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

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

  const { token } = useAuthSessionStore();

  useEffect(() => {
    if(token) {
      navigate("/dashboard");
      // console.log("a");
    }
  },[]);

  const navigate = useNavigate();

  const [inputSearch, setInputSearch ] = useState("");

  const [recentsProducts, setRecentsProducts] = useState<Product[]>([]);
  const [recommendedsProducts, setRecommendedsProducts] = useState<Product[]>([]);

  const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] = useState(false);
  const [isLoadingRecommendedsProducts, setIsLoadingRecommendedsProducts] = useState(false);

  const getRecentsProducts = async () => {
    setIsLoadingRecentsProducts(true);
    try {
      const response = await getApiRecentsProducts();

      setRecentsProducts(response.data.slice(0, 4));
    } catch (error) {
      toast.error(`Houve um erro ao buscar produtos recentes | ${error}`);
    }
    setIsLoadingRecentsProducts(false);
  };

  const navigateSearch = () => {
    navigate(`/products/search/${inputSearch}`);
  };

  const handleSearchOnEnter = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigateSearch();
    }
  };

  const getRecommendedsProducts = async () => {
    setIsLoadingRecommendedsProducts(true);
    try {
      const response = await getApiRecommendedsProducts();
      setRecommendedsProducts(response.data.slice(0, 4));
    } catch (error) {
      toast.error(`Houve um erro ao buscar produtos recomendados | ${error}`);
    }
    setIsLoadingRecommendedsProducts(false);
  };

  useEffect(() =>{
    getRecentsProducts();
  }, []);

  useEffect(() =>{
    getRecommendedsProducts();
  }, []);

  return (
    <UserTemplate>
      <div className="mt-10 mb-10">
        <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
          <div>
            <img src={carousel1} alt="Imagem de algo 1" />
          </div>
          <div>
            <img src={carousel2} alt="Imagem de algo 2" />
          </div>
          <div>
            <img src={carousel3} alt="Imagem de algo 3" />
          </div>
        </Carousel>
      </div>

      <div className="flex justify-between items-center gap-2 rounded-md shadow-md p-3 px-6 bg-white border-2 border-gray-50">
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Estou buscando por..."
          onChange={(event) => setInputSearch(event.target.value)}
          onKeyDown={handleSearchOnEnter}
        />
        <button onClick={navigateSearch} className="px-2 cursor-pointer py-1 transition duration-250 hover:brightness-70 active:brightness-40 active:translate-[1px]">
          <IoSearch className="text-[24px] text-gray-400"/>
        </button>
      </div>

      <h2 className="mt-12 text-gray-700">Itens recentes</h2>
      { isLoadingRecentsProducts && <ListLoading /> }
      <div className="flex flex-wrap">
        {
          recentsProducts.map((product) => (
            <CardProduct
              key={product._id}
              id={product._id}
              name={product.name}
              img={product.url1}
              manufacturer={product.manufacturer}
              price={product.price}
            />
          ))}
      </div>
      <Link to="/all-recents-products" className="flex text-gray-700 self-end cursor-pointer p-1 border-b-1 border-transparent hover:border-gray-700">
        <p>Ver todos os produtos recentes</p>
      </Link>

      <div className="bg-primary px-8 py-4 pb-8 rounded-lg mt-10 mb-10 shadow-lg">
        <h2 className="text-white text-[24px] mb-6">Categorias</h2>
        <div className="flex justify-around">
          {itemsCategory.map((category, index) => (
            <div key={index} className="flex flex-col  items-center cursor-pointer">
              <div className="bg-white w-[64px] h-[64px] rounded-full flex justify-center items-center text-[28px] mb-2">{category.icon}</div>
              <span className="text-white">{category.title}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-gray-700">Anúncios</h2>
      { isLoadingRecommendedsProducts && <ListLoading /> }
      <div className="flex flex-wrap">
        {
          recommendedsProducts.map((product) => (
            <CardProduct
              key={product._id}
              id={product._id}
              name={product.name}
              manufacturer={product.manufacturer}
              img={product.url1}
              price={product.price}
            />
          ))
        }
      </div>
      <Link to="/all-products" className="flex text-gray-700 self-end cursor-pointer p-1 border-b-1 border-transparent hover:border-gray-700">
        <p>Ver todos os produtos</p>
      </Link>
    </UserTemplate>
  )
};

export default Home;