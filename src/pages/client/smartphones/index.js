import './index.scss';
import Cabecalho from '../../../components/cabecalho';
import CaixaProduto from '../../../components/caixaProduto';
import Menu from '../../../components/menu';

export default function Smartphones() {


    return (
        <main className='pagina-principal-acessorios'>
            <Cabecalho />
            <header className='pagina-acessorios'>
                <section className='divisoria'>
                    <p> Home ¬ Smartphones </p>
                </section>

                <section className='principal-menu'>
                    <Menu />

                    <article className='acessorios-vitrine'>
                        <div className='titulo-vitrine'>
                            <h1> Smartphones </h1>
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