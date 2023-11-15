import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';




export default function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [exibirlista, setExibirlista] = useState(false);
    const [exibirlista2, setExibirlista2] = useState(false);
    const [exibirlista3, setExibirlista3] = useState(false);
    const [exibirlista4, setExibirlista4] = useState(false);
    const [exibirlista5, setExibirlista5] = useState(false);



    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    const [dropcapinha, setDropcapinha] = useState(false);

    const toggleDropcapinha = () => {
        setDropcapinha(!dropcapinha);
    };

    const [dropcarregadores, setDropcarregadores] = useState(false);

    const toggleDropcarregadores = () => {
        setDropcarregadores(!dropcarregadores);
    };

    const [dropfones, setDropfones] = useState(false);

    const toggleDropfones = () => {
        setDropfones(!dropfones);
    };




    return (
        <main className='pagina-menu'>
            <div className="menu">
                <h1>Menu Principal</h1>
                <div className="sidebar">
                    <div className='seila'>
                    <input type='checkbox' name='checkboxx' id='checkboxx' style={{ display: 'none' }} />
                    <Link to={'/smartphones'} id='titulo-smartphone'> Smartphones </Link>
                    <label htmlFor='checkboxx'>
                         <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                            setExibirlista(!exibirlista)
                            toggleDropdown()
                        }} />

                    </label>
                    </div>
                    
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Link id='categoria-medio' to='/smartphones/1'> Iphone </Link>
                            <Link id='categoria-medio' to='/smartphones/2'> Samsung </Link>
                            <Link id='categoria-medio' to='/smartphones/3' > Motorola </Link>
                            <Link id='categoria-medio' to='/smartphones/4' > Xiaomi </Link>
                        </div>
                    )}
                </div>


                <div className="sidebar">
                    <div className='seila'>
                        <input type='checkbox' name='checkbox2' id='checkbox2' style={{ display: 'none' }} />
                         <Link to={'/acessorios'} id='titulo-acessorios'> Acessórios </Link>
                    <label htmlFor='checkbox2'>
                        <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                            setExibirlista2(!exibirlista2)
                            toggleDropdown2()
                        }} />

                    </label>
                    </div>
                    
                    {dropdownOpen2 && (
                        <div className="dropdown-contente">
                            <div className='seila2'>
                            <input type='checkbox' name='checkbox3' id='checkbox3' style={{ display: 'none' }} />
                            <Link id='categoria-medio'> Capinhas </Link>
                            <label htmlFor='checkbox3'>
                                 <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                    setExibirlista3(!exibirlista3)
                                    toggleDropcapinha()
                                }} />
                            </label>
                            </div>
                            {dropcapinha && (
                                <div>
                                    <Link id='categoria-menor' to='/acessorios/5' > Iphone </Link>
                                    <Link id='categoria-menor' to='/acessorios/6' > Samsung </Link>
                                    <Link id='categoria-menor' to='/acessorios/7' > Motorola </Link>
                                    <Link id='categoria-menor' to='/acessorios/8' > Xiaomi </Link>
                                </div>

                            )}

                            <div>
                                <div className='seila2'>
                                <input type='checkbox' name='checkbox4' id='checkbox4' style={{ display: 'none' }} />
                                <Link id='categoria-medio'> Carregadores </Link>
                                <label htmlFor='checkbox4'>
                                     <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                        setExibirlista4(!exibirlista4)
                                        toggleDropcarregadores()
                                    }} />

                                </label>
                                </div>
                                {dropcarregadores && (
                                    <div>
                                        <Link id='categoria-menor' to='/acessorios/9' > Cabo light </Link>
                                        <Link id='categoria-menor'  to='/acessorios/10' > Tipo C </Link>
                                        <Link id='categoria-menor'  to='/acessorios/11' > Tipo USB </Link>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className='seila2'>
                                <input type='checkbox' name='checkbox5' id='checkbox5' style={{ display: 'none' }} />
                                <Link id='categoria-medio'> Fones </Link>
                                <label htmlFor='checkbox5'>
                                     <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                        setExibirlista5(!exibirlista5)
                                        toggleDropfones()
                                    }} />

                                </label>
                                </div>
                                {dropfones && (
                                    <div>
                                        <Link id='categoria-menor'  to='/acessorios/12' > bluetooth </Link>
                                        <Link id='categoria-menor'  to='/acessorios/13' > Com fio </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};