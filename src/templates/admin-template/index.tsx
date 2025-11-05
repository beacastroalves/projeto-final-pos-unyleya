import { useEffect, type PropsWithChildren } from "react"
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

type AdminTemplateProps = PropsWithChildren & {};

const AdminTemplate = (props: AdminTemplateProps) => {

  const { token } = useAuthSessionStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
      navigate("/");
    }
  },[]);

  useEffect(()=> {
    window.scrollTo(0, 0)
  },[pathname]);

  return (
    <div className="min-h-screen flex flex-col select-none bg-gray-100">
      <HeaderAdmin />

      <div className="flex flex-col flex-1 p-4 w-full max-w-[1024px] self-center justify-center">
        {props.children}
      </div>

      <Footer />
    </div>
  )
};

export default AdminTemplate;