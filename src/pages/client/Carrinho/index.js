import './index.scss';

import Cabecalho from '../../component/cabecalho';
import Rodape from '../../component/rodape';


export default function Carrinho (){








    return(
        <div className='pagina-carrinho'>
            <Cabecalho/>
            <div className='container'>
                <div className='bt-carrinho'>
                    <p> Meu Carrinho </p>
                </div>

            <div className='carrinho'>
            <div className='ps'>
                <img src='/assets/images/carrinho2.png'/>
                    <p id='negrito'> Seu carrinho esta vazio... </p>
                    <p id='nor'> Que tal navegar na loja e encontrar algum <br/> produto que você gosta? </p>
                    </div>
                
            </div>
            <button> Adicione Item </button>
            </div>
        
            <Rodape />
        </div>
    )
}