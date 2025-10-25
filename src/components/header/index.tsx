import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary flex justify-between items-center py-4 px-3">
      <h1 className="text-white text-[32px] font-bold">Unybay</h1>

      <ul className="flex gap-5 items-center text-white">
        <li className="cursor-pointer py-2 px-3 rounded-md transition duration-300 hover:bg-primary hover:brightness-115 active:brightness-110">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer py-2 px-3 rounded-md transition duration-300 hover:bg-primary hover:brightness-115 active:brightness-110 ">
          <Link to="/" className="text-white">Quem Somos</Link>
        </li>
        <li>
          <button className="bg-secondary px-8 py-2 rounded-md cursor-pointer">Entrar</button>
        </li>
      </ul>
    </div>
  )
};

export default Header;