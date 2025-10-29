import { BiEditAlt, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import Modal from 'react-modal';
import { useState } from "react";

const customStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
}

Modal.setAppElement('#root')

const CardProductAdmin = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <button
      // onClick={() => navigate("/products/details")}
        className="flex flex-col gap-2 justify-center items-center px-6 py-8 my-4 mx-2 shadow-md rounded-md h-fit w-fit min-w-[220px] border-2 border-gray-50 bg-white cursor-pointer"
      >
        <h1 className="text-[16px] font-bold mb-1 w-full text-left">Nome do Produto</h1>
        <img className="w-[150px] my-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegoodguys.sirv.com%2Fproducts%2F50083302%2F50083302_833214.PNG%3Fscale.height%3D505%26scale.width%3D773%26canvas.height%3D505%26canvas.width%3D773%26canvas.opacity%3D0%26q%3D90&f=1&nofb=1&ipt=261965353f8013573740608f6d87e8b15b16a963971a36fe5c271f19a9130610" alt="Alexa dot 8 geracao" />
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-between">
            <p className="w-full mt-3 text-[14px] text-left">Nome do Fabricante</p>
            <p className="w-full text-[20px] text-left">R$ 000,00</p>
          </div>
          <div className="flex flex-col items-center gap-1 mt-2 text-[18px]">
            <button onClick={() => navigate("/form-product")} className="cursor-pointer p-1 transition duration-200 hover:text-primary hover:scale-150" title="Editar Produto">
              <BiEditAlt />
            </button>
            <button onClick={() => setIsOpen(true)} className="cursor-pointer p-1 transition duration-200 hover:text-red-700 hover:scale-150" title="Deletar Produto">
              <BiTrash />
            </button>
          </div>
        </div>
      </button>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="font-bold text-center text-[18px] mt-4 my-2 px-32 select-none">Excluir Produto</p>
        <p className="text-center my-4 select-none">Deseja realmente excluir o item?</p>
        <div className="flex items-center justify-center gap-4 mb-2 select-none">
          <button className="cursor-pointer bg-primary text-white border-2 border-primary rounded-lg py-2 px-10 my-2 transition duration-300 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]">Sim</button>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer text-primary border-2 border-primary rounded-lg py-2 px-10 my-2 transition duration-300 hover:bg-primary/10 active:bg-primary/20 active:translate-[1px]">Não</button>
        </div>
      </Modal>
    </div>
  )
};

export default CardProductAdmin;