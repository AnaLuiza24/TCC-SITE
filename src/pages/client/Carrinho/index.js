import './index.scss';

import CabecalhoLogado from '../../../components/cabecalho-logado';
import Rodape from '../../../components/rodape';
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import storage from 'local-storage'


export default function Carrinho (){

    




    return(
        <div className='pagina-carrinho'>
            {storage('usuario-logado') ? <CabecalhoLogado /> : <Cabecalho/> }
            <div className='container'>
                <div className='bt-carrinho'>
                    <p> Home - Meu Carrinho </p>
                </div>

            <div className='carrinho'>
            <div className='ps'>
                <img src='/assets/images/carrinho2.png'/>
                    <p id='negrito'> Seu carrinho esta vazio... </p>
                    <p id='nor'> Que tal navegar na loja e encontrar algum <br/> produto que você gosta? </p>
                    </div>
                
            </div>
            <Link id='adicionaritem' to={'/smartphones'}> Adicione Item </Link>  
            </div>
        
            <Rodape />
        </div>
    )
}