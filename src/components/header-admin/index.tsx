import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

const customStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.6)',
  },
  content: {
    top: '28%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
}

const HeaderAdmin = () => {
  const { clearToken } = useAuthSessionStore();
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);

  const logout = async() => {
    clearToken();
    navigate("/");
  }

  return (
    <div className="bg-primary flex justify-between items-center py-4 px-3">
      <button onClick={() => navigate('/')} className="cursor-pointer">
        <h1 className="text-white text-[32px] font-bold">Unybay</h1>
      </button>

      <ul className="flex gap-5 items-center text-white">
        <li>
          <Link
            to="/"
            className="cursor-pointer py-2 px-3 rounded-md border-b-2 border-t-2 border-transparent hover:border-white/50 hover:shadow-lg active:translate-[1px] active:drop-shadow-lg active:shadow-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="cursor-pointer py-2 px-3 rounded-md border-b-2 border-t-2 border-transparent hover:border-white/50 hover:shadow-lg active:translate-[1px] active:drop-shadow-lg active:shadow-lg"
          >
            Quem Somos
          </Link>
        </li>
        <li>
          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer py-2 px-3 rounded-md border-b-2 border-t-2 border-transparent hover:border-white/50 hover:shadow-lg active:translate-[1px] active:drop-shadow-lg active:shadow-lg"
          >
            Sair
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/my-products')}
            className="bg-white text-secondary px-8 py-2 ml-2 rounded-md cursor-pointer transition duration-300 hover:drop-shadow-md hover:text-secondary-300 active:text-secondary-600 active:translate-[1px] active:drop-shadow-lg"
          >
            Anunciar
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="font-bold text-center text-[18px] mt-4 my-2 px-32 select-none">Confirmar logout</p>
        <p className="text-center my-4 select-none">Deseja realmente sair?</p>
        <div className="flex items-center justify-center gap-4 mb-2 select-none">
          <button
            onClick={logout}
            className="cursor-pointer bg-primary text-white border-2 border-primary rounded-lg py-2 px-10 my-2 transition duration-300 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]"
          >
            Sim
          </button>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer text-primary border-2 border-primary rounded-lg py-2 px-10 my-2 transition duration-300 hover:bg-primary/10 active:bg-primary/20 active:translate-[1px]">Não</button>
        </div>
      </Modal>
    </div>
  )
};

export default HeaderAdmin;