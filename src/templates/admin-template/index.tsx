import type { PropsWithChildren } from "react"
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {};

const AdminTemplate = (props: AdminTemplateProps) => {

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