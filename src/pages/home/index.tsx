import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

const Home = () => {
  return (
    <UserTemplate>
      <h2>Itens recentes</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>

    <h2>Anúncios</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>
    </UserTemplate>
  )
};

export default Home;