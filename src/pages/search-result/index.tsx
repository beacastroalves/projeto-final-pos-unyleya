import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

const SearchProducts = () => {
  return (
    <UserTemplate>
      <h1 className="mt-10 m-4 text-[20px]">Resultado da busca</h1>

      <div className="flex flex-wrap justify-between">
        {
          Array.from({ length: 4 }).map(() => (
            <CardProduct />
          ))
        }
      </div>

      <p className="self-end m-4">4 itens</p>
    </UserTemplate>
  )
};

export default SearchProducts;