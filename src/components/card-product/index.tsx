const CardProduct = () => {
  return (
    <div className="shadow-md rounded-md px-6 py-8 m-4 flex flex-col justify-center items-center gap-1 h-fit">
      <h1 className="text-center text-[20px]">Nome do Produto</h1>

      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegoodguys.sirv.com%2Fproducts%2F50083302%2F50083302_833214.PNG%3Fscale.height%3D505%26scale.width%3D773%26canvas.height%3D505%26canvas.width%3D773%26canvas.opacity%3D0%26q%3D90&f=1&nofb=1&ipt=261965353f8013573740608f6d87e8b15b16a963971a36fe5c271f19a9130610" alt="Alexa dot 8 geracao" className="w-[100px] mt-2"/>
      <p className="w-full mt-3">Nome do Fabricante</p>
      <p className="w-full text-[24px]">R$ 000,00</p>
    </div>
  )
};

export default CardProduct;