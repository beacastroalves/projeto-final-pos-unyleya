import type { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

// Modo mais antigo de fazer o props com children
// type UserTemplateProps = {
//   children: React.ReactElement;
// };

type UserTemplateProps = PropsWithChildren & {};

const UserTemplate = (props: UserTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col select-none">
      <Header />
      <div className="flex flex-col flex-1 p-4 w-full max-w-[1024px] justify-center self-center">{props.children}</div>
      <Footer />
    </div>
  )
}

export default UserTemplate;