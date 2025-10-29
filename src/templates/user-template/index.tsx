import { useEffect, type PropsWithChildren } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";

// Modo mais antigo de fazer o props com children
// type UserTemplateProps = {
//   children: React.ReactElement;
// };

type UserTemplateProps = PropsWithChildren & {};

const UserTemplate = (props: UserTemplateProps) => {

  const { pathname } = useLocation();

  useEffect(()=> {
    window.scrollTo(0, 0)
  },[pathname]);

  return (
    <div className="min-h-screen flex flex-col select-none bg-gray-100">
      <Header />
      <div className="flex flex-col flex-1 p-4 w-full max-w-[1024px] self-center">{props.children}</div>
      <Footer />
    </div>
  )
}

export default UserTemplate;