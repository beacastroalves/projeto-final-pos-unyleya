import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";

const Details = () => {
  return (
    <UserTemplate>
      <h1 className="text-[24px] font-bold mt-10">Echo Dot (8º geração)</h1>
      <div className="flex gap-4 mt-8 mb-14">
        <div className="flex-1 bg-white items-center rounded-md">
          <Carousel showThumbs={false} emulateTouch={true} className="px-20 py-4 min-w-[400px]">
            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.radioshack.com.mx%2Fmedias%2F100112384.jpg-1200ftw%3Fcontext%3DbWFzdGVyfHJvb3R8NDgxODQ0fGltYWdlL2pwZWd8aDlmL2g4MC85MTA5NzkzMTQ0ODYyLzEwMDExMjM4NC5qcGdfMTIwMGZ0d3wyNGFlYzE4ZjE3MThjMzllYmMzNDQ0NWJjNDU4MjBlMTViZjBkZTliN2ZmZWI2YzQyYjlmYTQyZTg5YzgwZWRl&f=1&nofb=1&ipt=b3d908912de5b124a4c11aaeabf7279205292415162b16a19194c6db58a18cd6" alt="Imagem de uma alexa dot de cor preta" />
            </div>
            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.NZE-lxzr26A_VkadU22gEAHaGi%3Fpid%3DApi&f=1&ipt=3f150fe19836e6339c69a67535fcdade8368f02c7257be365556eb9a0050e16c&ipo=images" alt="Imagem de uma alexa dot - Cor branca" />
            </div>
            <div>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorables.com%2Fwp-content%2Fuploads%2F2024%2F01%2Fhow-do-i-set-up-alexa-echo-dot-1704353221.jpg&f=1&nofb=1&ipt=61f26fdd3afe94e586cb76ec549f171a6affb0922b7867d5d147570a2813686f" alt="Imagem de uma alexa dot" />
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-white w-full px-6 p-4 rounded-md">
            <h3 className="font-bold text-[16px] mb-4">Informações do Vendedor</h3>
            <p className="mb-2">#Nome do vendedor</p>
            <p className="mb-2">#Localidade do vendedor</p>
            <p className="mb-2">Email: <span>#email@email.com</span></p>
            <p className="mb-2">Telefone: <span>#(85) 99123-4567</span></p>
          </div>
          <div className="bg-white w-full h-full px-6 p-4 rounded-md flex flex-col justify-center items-center">
            <small className="self-start">Preço</small>
            <p className="flex justify-center items-center text-[32px] font-medium">R$ 799.99</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[18px] mb-8">Descrição</p>
        <p className="text-gray-600 mb-20 leading-7 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, eaque. Facere porro ab itaque est velit fugiat illum voluptatibus accusantium eum, commodi molestiae quae iusto nisi illo numquam. Impedit, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est sint deleniti dignissimos minima, rem praesentium corrupti impedit, perferendis ipsum sequi quos error placeat molestiae! Eaque fuga ex suscipit veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem aperiam ad porro fugit at unde laborum culpa recusandae autem ipsa similique quae possimus fuga error. A dicta saepe cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi. Quia eius quod unde nisi dolorum distinctio eligendi, mollitia, tempore pariatur harum repellendus recusandae nemo quo quidem quibusdam ipsa voluptates. Lorem</p>
      </div>
    </UserTemplate>
  )
};

export default Details;