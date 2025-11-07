import { BiEditAlt, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import Modal from 'react-modal';
import { useState } from "react";
import type { CardProps } from "./types";
import { deleteApiProduct } from "./services";
import { toast } from "react-toastify";
import { getApiMyProducts } from "../../pages/user-products/services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { formatPrice } from "../../utils/format-price";

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

const CardProductAdmin = (props: CardProps) => {
  const { token } = useAuthSessionStore();
  const [modalIsOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const deleteProduct = async () => {
    try {
      await deleteApiProduct(props.id, token);
      const response = await getApiMyProducts(token);
      props.setMyProducts(response.data);
      setIsOpen(false);
      toast.success(`Produto ${props.name} deletado com sucesso`);
    } catch (error) {
      toast.error(`Erro ao deletar o produto | ${error}`)
    }
  }

  return (
    <div>
      <div
        // onClick={() => navigate(`/products/details/${props.id}`)}
        className="flex flex-col items-center justify-between p-6 my-4 mx-2 shadow-md rounded-md h-[400px] w-[230px] border-2 border-gray-50 bg-white cursor-pointer"
      >
        <h1 className="text-[16px] font-bold mb-1 w-full text-left">{props.name}</h1>
        <img className="max-h-[150px] my-3" src={props.img} alt={`Imagem do produto: ${props.name}`} />
        <div className="flex flex-row justify-between items-center w-full">
          <div className="self-start">
            <p className="w-full mt-3 text-[14px] text-left mb-1">{props.manufacturer}</p>
            <p className="w-full text-[24px] text-left">{formatPrice(props.price)}</p>
          </div>
          <div className="flex flex-col items-center gap-1 mt-2 text-[18px]">
            <button onClick={() => navigate(`/form-product-edit/${props.id}`)} className="cursor-pointer p-1 transition duration-200 hover:text-primary hover:scale-150" title="Editar Produto">
              <BiEditAlt />
            </button>
            <button onClick={() => setIsOpen(true)} className="cursor-pointer p-1 transition duration-200 hover:text-red-700 hover:scale-150" title="Deletar Produto">
              <BiTrash />
            </button>
          </div>
        </div>
      </div>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="font-bold text-center text-[18px] mt-4 my-2 px-32 select-none">Excluir Produto</p>
        <p className="text-center my-4 select-none">Deseja realmente excluir o item?</p>
        <div className="flex items-center justify-center gap-4 mb-2 select-none">
          <button
            onClick={deleteProduct}
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

export default CardProductAdmin;