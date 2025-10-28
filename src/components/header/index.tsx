import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-primary flex justify-between items-center py-4 px-3">
      <button onClick={() => navigate('/')} className="cursor-pointer">
        <h1 className="text-white text-[32px] font-bold">Unybay</h1>
      </button>

      <ul className="flex gap-5 items-center text-white">
        <li className="cursor-pointer py-2 px-3 rounded-md border-b-2 border-t-2 border-transparent hover:border-white/50 hover:shadow-lg active:translate-[1px] active:drop-shadow-lg active:shadow-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer py-2 px-3 rounded-md border-b-2 border-t-2 border-transparent hover:border-white/50 hover:shadow-lg active:translate-[1px] active:drop-shadow-lg active:shadow-lg">
          <Link to="/about-us" className="text-white">Quem Somos</Link>
        </li>
        <li>
          <button onClick={() => navigate('/login')} className="bg-secondary px-8 py-2 rounded-md cursor-pointer transition duration-300 hover:drop-shadow-md hover:brightness-105 active:brightness-98 active:translate-[1px] active:drop-shadow-lg">Entrar</button>
        </li>
      </ul>
    </div>
  )
};

export default Header;