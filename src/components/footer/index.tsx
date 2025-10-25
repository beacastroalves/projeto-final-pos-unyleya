import {BsLinkedin, } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="text-white bg-primary p-10">
      <button onClick={() => navigate('/')} className="cursor-pointer transition duration-200 hover:text-shadow-lg">
        <h2 className="text-[22px] font-bold mb-5">Unybay</h2>
      </button>

      <p className="text-center">Unyleya Educacional | Todos os direitos reservados </p>
      <div className="flex justify-center gap-3 mt-5">
        <a href="https://www.linkedin.com/in/beacastrodev/" target="_blank" className="cursor-pointer scale-110 transition duration-250 hover:scale-160" title="Linkedin - Beatriz Castro">
          <BsLinkedin />
        </a>
        <a href="https://github.com/beacastroalves" target="_blank" className="cursor-pointer scale-115 transition duration-250 hover:scale-170" title="Github Page - Beatriz Castro">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
};

export default Footer;