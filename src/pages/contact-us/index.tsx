import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

type ContactUsForm = {
  name: string;
  email: string;
  message: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório").min(8, "Mínimo de 10 caracteres"),
  email: Yup.string()
    .required("Campo obrigatório")
    .email("Digite um e-mail válido"),
  message: Yup.string().required("Campo obrigatório"),
});

const ContactUs = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactUsForm>({ resolver: yupResolver(schemaValidation) });

  const MessageUs = (values: ContactUsForm) => {
    console.log(values);
  };

  return (
    <AuthTemplate>
      <div className="bg-white py-8 px-16 rounded-lg shadow-lg w-[500px] flex flex-col gap-4 self-center">
        <h1 className="font-bold text-primary text-[24px] text-center">Unybay</h1>
        <p className="text-gray-600 text-[14px] text-center mb-6">Fale conosco através do formulário abaixo</p>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(MessageUs)}
        >

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('name')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="text"
              placeholder="Nome Completo"
            />
            { errors.name && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.name.message }</span>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('email')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="email"
              placeholder="E-mail"
            />
            { errors.email && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.email.message }</span>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-[150px] h-[150px]">
            <textarea
              {...register('message')}
              className="border-2 border-gray-200 min-h-[120px] rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              placeholder="Escreva aqui sua mensagem"
            />
            { errors.message && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.message.message }</span>
            )}
          </div>

          <button
            className="border-2 border-primary bg-primary text-white rounded-lg py-2 px-4 my-1 mb-4 cursor-pointer transition duration-200 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]"
            type="submit"
          >
            Enviar
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 text-[14px] cursor-pointer hover:text-gray-600"
          >
            Voltar para página inicial
          </button>
        </form>
      </div>
    </AuthTemplate>
  )
};

export default ContactUs;