import { useEffect, type PropsWithChildren } from "react"
import Footer from "../../components/footer";
import { useLocation, useNavigate } from "react-router-dom";

type AuthTemplateProps = PropsWithChildren & {};

const AuthTemplate = (props: AuthTemplateProps) => {

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(()=> {
    window.scrollTo(0, 0)
  },[pathname]);

  return (
    <div className="min-h-screen flex flex-col select-none bg-gray-100">
      <div className="bg-primary text-white py-4 px-3">
        <button onClick={() => navigate('/')} className="cursor-pointer">
          <h1 className="text-white text-[32px] font-bold">Unybay</h1>
        </button>
      </div>

      <div className="flex flex-col flex-1 p-4 w-full max-w-[1024px] self-center justify-center">
        {props.children}
      </div>

      <Footer />
    </div>
  )
};

export default AuthTemplate;