import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';

export default function Acessorios() {


    return (
        <main className='pagina-principal-acessorios'>
            <Cabecalho />
            <header className='pagina-acessorios'>
                <section className='divisoria'>
                    <p> Home > Acessórios </p>
                </section>

                <section className='acessorios-menu'>
                    <Menu />

                    <article className='acessorios-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Acessórios </h1>
                        </div>

                        <div className='produto-vitrine'>
                            <CaixaProduto />
                            <CaixaProduto />
                            <CaixaProduto />
                        </div>
                    </article>
                </section>
            </header>
        </main>
    )
}