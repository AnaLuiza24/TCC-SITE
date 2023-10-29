import Cabecalho from '../../../components/cabecalho';
import Rodape from '../../../components/rodape';
import './index.scss';

export default function SobreNos() {
  return (
    <main className='pagina-sobreNos'>
      <Cabecalho />
      <section>
        <div className='sobreNos-principal'>
          <div>
            <h1>SMART SEVEN</h1>
            <hr></hr>
          </div>

          <p>Somos a sua loja online onde pode comprar smartphones e acessórios para eles. Na Smart Seven, você pode encontrar muitos produtos perfeitos para o dia a dia ou eventos específicos. Nossa loja online oferece uma grande variedade de produtos para uma experiência de compra com total confiança. Nossos princípios são a cooperação, os preços justos e um bom serviço.</p>
        </div>

        <div>
          <h4>Sobre Nós</h4>
          <p>Somos uma empresa comprometida com o cliente, oferecendo uma experiência 100% online. Já realizamos mais de 100.000 pedidos e fizemos diversos clientes felizes. Temos uma central de atendimento ao consumidor, totalmente em português, que opera de segunda a sexta, das 9h às 18h.</p>
        </div>

        <div className='oferecer-sobreNos'>
          <h4>O que Oferecemos</h4>


          <div>
            <h5>Melhores produtos com os menores preços</h5>
            <p>Fazemos uma curadoria dos melhores produtos em todo mundo e junto com nossa experiência em logistica, levamos esses produtos a você com os menores preços do mercado.</p>
          </div>

          <div>
            <h5>Satisfação garantida</h5>
            <p>Prezamos pela satisfação de nossos clientes, caso você não esteja feliz com seu produto tem até 7 dias para devolução.</p>
          </div>

          <div>
            <h5>Proteção ao cliente</h5>
            <p>Oferecemos uma experiência de compra online com total segurança, desde o acesso ao site até a finalização de compra com processos de encriptação. Você também está protegido caso tenha algum problema em sua compra pelo nosso método de pagamento.</p>
            <p>Em caso de dúvidas, entre em contato conosco por meio do nosso E-mail: sac@smartseven.com.br</p>
          </div>
        </div>
      </section>

      <Rodape />
    </main>
  )
}