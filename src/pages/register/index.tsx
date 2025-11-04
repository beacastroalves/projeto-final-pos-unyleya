import { useNavigate } from "react-router-dom";
import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterForm } from "./types";
import { registerUser } from "./services";
import { toast } from "react-toastify";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  state: Yup.string().required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(4, "Mínimo de 4 caracteres")
});

const Register = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterForm>({ resolver: yupResolver(schemaValidation) });

  const createUser = async (values: RegisterForm) => {
    try {
      const response = await registerUser(values);
      console.log(response.data);
      reset();
      toast.success("Usuario cadastrado com sucesso!");
    } catch (error) {
      toast.error(`Não foi possível fazer login. Tente novamente | ${error}`);
    }
    console.log(values);
  };

  return (
    <AuthTemplate>
      <div className="bg-white py-8 px-16 rounded-lg shadow-lg w-[500px] flex flex-col gap-4 self-center">
        <h1 className="font-bold text-primary text-[24px] text-center">Unybay</h1>
        <p className="text-gray-600 text-[14px] text-center mb-6">Faça aqui seu registro</p>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(createUser)}
        >

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('name')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="text"
              placeholder="Nome"
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

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('phone')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="tel"
              placeholder="Telefone"
            />
            { errors.phone && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.phone.message }</span>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('city')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="text"
              placeholder="Cidade"
            />
            { errors.city && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.city.message }</span>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('state')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="text"
              placeholder="Estado"
            />
            { errors.state && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.state.message }</span>
            )}
          </div>

          <div className="flex flex-col flex-1 min-h-[70px] h-[70px]">
            <input
              {...register('password')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="password"
              placeholder="Senha"
            />
            { errors.password && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.password.message}</span>
            )}
          </div>

          <button
            className="border-2 border-primary bg-primary text-white rounded-lg py-2 px-4 my-4 cursor-pointer transition duration-200 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]"
            type="submit"
          >
            Confirmar Cadastro
          </button>
          <button
            onClick={() => navigate('/login')}
            className="text-gray-400 text-[14px] cursor-pointer hover:text-gray-600"
          >
            Fazer login
          </button>
        </form>
      </div>
    </AuthTemplate>
  )
};

export default Register;