import {BsLinkedin, BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white bg-primary p-10">
      <h2 className="text-[22px] font-bold mb-5">Unybay</h2>

      <p className="text-center">Unyleya Educacional | Todos os direitos reservados </p>
      <div className="flex justify-center gap-2 mt-5">
        <BsLinkedin />
        <BsFacebook />
      </div>
    </footer>
  )
};

export default Footer;