import { useForm } from "react-hook-form";
import AuthTemplate from "../../templates/auth-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
}

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(4, "Mínimo de 4 caracteres")
});

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({ resolver: yupResolver(schemaValidation) });

  const logar = (values: LoginForm) => {
    console.log(values);
  };

  return (
    <AuthTemplate>
      <div className="bg-white py-8 px-20 rounded-lg shadow-lg w-[500px] flex flex-col gap-4 self-center">
        <h1 className="font-bold text-primary text-[24px] text-center">Unybay</h1>
        <p className="text-gray-600 text-[14px] text-center mb-6">Acesse a sua conta</p>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(logar)}
        >
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
              {...register('password')}
              className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm"
              type="password"
              placeholder="Senha"
            />
            { errors.password && (
              <span className="text-red-700 text-[12px] ml-2">{ errors.password.message}</span>
            )}
          </div>

          <button className="border-2 border-primary bg-primary text-white rounded-lg py-2 px-4 my-4 cursor-pointer transition duration-200 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]" type="submit">Entrar</button>
          <button onClick={() => navigate('/register')} className="text-gray-400 text-[14px] cursor-pointer hover:text-gray-600">Cadastre-se</button>
        </form>
      </div>
    </AuthTemplate>
  )
};

export default Login;