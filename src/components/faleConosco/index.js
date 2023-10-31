import './index.scss'

export default function FaleConosco(){
    return(
        <main>
            <section id='fale-conosco' className='inicial-fale-conosco'>
                    <h1>FALE CONOSCO</h1>

                    <input type='text' placeholder='Nome*' id='fale-conosco-completo'/>

                    <div >
                        <input type='text' placeholder='Telefone*' id='fale-conosco-pequeno'/>
                        <input type='text' placeholder='E-mail*' id='fale-conosco-pequeno'/>
                    </div>

                    <input type='text' placeholder='Escreva seu problema ou suas sugestões' id='fale-conosco-completo'/>

                    <div className='inicial-fale-conosco-button'>
                        <button>ENVIAR</button>
                    </div>
                </section>
        </main>
    )
}