import { HiOutlineGlobeAlt, HiOutlineHeart, HiOutlineLightBulb } from "react-icons/hi";
import UserTemplate from "../../templates/user-template"

const AboutUs = () => {
  return (
    <UserTemplate>
      <div className="flex flex-col gap-16 py-10">
        <section>
          <h1 className="text-[36px] font-bold text-center text-primary-600 mb-8">
            Nossa História e Missão
          </h1>
          <div className="bg-white py-8 px-10 rounded-lg shadow-lg">
            <p className="text-gray-700 text-[18px] leading-7.5">
              A <span className="font-bold text-primary">Unybay</span> nasceu de uma visão simples: criar um mercado online onde a conexão e a confiança fossem o centro de tudo. Desde o nosso início, em 2025, nos dedicamos a ser mais do que uma plataforma de vendas; somos uma comunidade que valoriza a diversidade de produtos e a experiência do cliente. Acreditamos que encontrar o produto certo deve ser fácil, seguro e inspirador.
            </p>
            <p className="text-gray-700 text-[18px] leading-7.5 mt-4 italic w-full text-right">
              "Conectando paixões, entregando valor."
            </p>
          </div>
        </section>

        <section className="py-4">
          <h2 className="text-[32px] font-medium text-center text-primary-600 mb-8">
            Nossos Valores Fundamentais
          </h2>
          <div className="flex flex-row gap-8">
            <div className="bg-primary/10 p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center transition duration-300 hover:bg-primary/12">
              <HiOutlineLightBulb className="text-[48px] text-primary mb-3" />
              <h3 className="text-[20px] font-bold text-primary-900 transition mb-2">Inovação Contínua</h3>
              <p className="text-gray-600">
                Estamos sempre buscando novas maneiras de melhorar a sua experiência, desde a navegação até o checkout.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center transition duration-300 hover:bg-primary/12">
              <HiOutlineHeart className="text-[48px] text-primary mb-3" />
              <h3 className="text-[20px] font-bold text-primary-900 transition mb-2">Comunidade e Confiança</h3>
              <p className="text-gray-600">
                Construímos um ambiente seguro, onde vendedores e compradores interagem com transparência e respeito mútuo.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg shadow-md flex-1 flex flex-col items-center text-center transition duration-300 hover:bg-primary/12">
              <HiOutlineGlobeAlt className="text-[48px] text-primary mb-3" />
              <h3 className="text-[20px] font-bold text-primary-900 transition mb-2">Ampla Variedade</h3>
              <p className="text-gray-600">
                Da ferramenta especializada ao presente exclusivo, oferecemos um catálogo vasto para atender a todas as suas necessidades.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-secondary/15 text-white p-8 rounded-lg text-center">
          <h3 className="text-[24px] font-bold mb-3 text-secondary">Junte-se à Família Unybay!</h3>
          <p className="text-[18px] text-secondary brightness-80">
            Seja você um comprador à procura daquela oferta imperdível ou um vendedor querendo expandir o seu negócio, a Unybay é o seu lugar. Explore as categorias e comece a sua jornada conosco hoje!
          </p>
        </div>

      </div>
    </UserTemplate>
  )
};

export default AboutUs;