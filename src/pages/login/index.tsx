import { useForm } from "react-hook-form";
import AuthTemplate from "../../templates/auth-template";

const Login = () => {

  const { register, handleSubmit } = useForm();

  const logar = () => {
    alert('ok');
  };

  return (
    <AuthTemplate>
      <div className="bg-white py-8 px-10 rounded-lg shadow-lg w-[400px] flex flex-col gap-4 self-center">
        <h1 className="font-bold text-primary text-[24px] text-center">Unybay</h1>
        <p className="text-gray-600 text-[14px] text-center">Acesse a sua conta</p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(logar)}>
          <input className="border-2 border-gray-200 rounded-lg py-2 px-4 mt-4 outline-gray-400 shadow-sm" {...register('email')} type="text" placeholder="E-mail" />
          <input className="border-2 border-gray-200 rounded-lg py-2 px-4 outline-gray-400 shadow-sm" {...register('password')} type="password" placeholder="Senha" />
          <button className="border-2 border-primary bg-primary text-white rounded-lg py-2 px-4 mt-4 cursor-pointer transition duration-200 hover:bg-primary-300 active:bg-primary-600 active:translate-[1px]" type="submit">Entrar</button>
          <button className="text-gray-400 text-[14px] cursor-pointer hover:text-gray-600">Cadastre-se</button>
        </form>
      </div>
    </AuthTemplate>
  )
};

export default Login;