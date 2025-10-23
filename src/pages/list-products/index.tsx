import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

const ListProducts = () => {
  return (
    <UserTemplate>
      <h1 className="mt-10">Itens Recentes</h1>

      <div className="flex flex-wrap justify-center">
        {
          Array.from({ length: 14 }).map(() => (
            <CardProduct />
          ))
        }
      </div>
    </UserTemplate>
  )
};

export default ListProducts;