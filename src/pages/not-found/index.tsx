import UserTemplate from "../../templates/user-template"

const NotFound = () => {
  return (
    <UserTemplate>
      <h1 className="text-center w-screen text-[32px] font-bold mt-10 justify-center self-center">Página não encontrada...</h1>
    </UserTemplate>
  )
};

export default NotFound;