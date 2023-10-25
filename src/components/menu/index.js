import React, { useState } from 'react';
import './index.scss';

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
                <div className="sidebar">
                    <div className='seila'>
                    <input type='checkbox' name='checkboxx' id='checkboxx' style={{ display: 'none' }} />
                    <p> Smartphones </p>
                    <label htmlFor='checkboxx'>
                         <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                            setExibirlista(!exibirlista)
                            toggleDropdown()
                        }} />

                    </label>
                    </div>
                    
                    {dropdownOpen && (
                        <ul className="dropdown-content">
                            <li> Iphone </li>
                            <li>Samsung</li>
                            <li> Motorola</li>
                            <li> Xiaomi</li>
                        </ul>
                    )}
                </div>


                <div className="sidebar">
                    <div className='seila'>
                        <input type='checkbox' name='checkbox2' id='checkbox2' style={{ display: 'none' }} />
                    <label htmlFor='checkbox2'>
                        <p> Acessorios </p> <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                            setExibirlista2(!exibirlista2)
                            toggleDropdown2()
                        }} />

                    </label>
                    </div>
                    
                    {dropdownOpen2 && (
                        <ul className="dropdown-contente">
                            <div className='seila2'>
                            <input type='checkbox' name='checkbox3' id='checkbox3' style={{ display: 'none' }} />
                            <p> Capinhas </p>
                            <label htmlFor='checkbox3'>
                                 <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                    setExibirlista3(!exibirlista3)
                                    toggleDropcapinha()
                                }} />
                            </label>
                            </div>
                            {dropcapinha && (
                                <ul>
                                    <li> Iphone </li>
                                    <li> Samsung </li>
                                    <li> Motorola </li>
                                    <li> Xiaomi </li>
                                </ul>

                            )}

                            <div>
                                <div className='seila2'>
                                <input type='checkbox' name='checkbox4' id='checkbox4' style={{ display: 'none' }} />
                                <p> Carregadores </p>
                                <label htmlFor='checkbox4'>
                                     <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                        setExibirlista4(!exibirlista4)
                                        toggleDropcarregadores()
                                    }} />

                                </label>
                                </div>
                                {dropcarregadores && (
                                    <ul>
                                        <li> Cabo light </li>
                                        <li> Tipo C </li>
                                        <li> Tipo USB </li>
                                    </ul>
                                )}
                            </div>

                            <div>
                                <div className='seila2'>
                                <input type='checkbox' name='checkbox5' id='checkbox5' style={{ display: 'none' }} />
                                <p> Fones </p>
                                <label htmlFor='checkbox5'>
                                     <img alt='seta' src='/assets/images/seta-menu.png' onClick={() => {
                                        setExibirlista5(!exibirlista5)
                                        toggleDropfones()
                                    }} />

                                </label>
                                </div>
                                {dropfones && (
                                    <ul>
                                        <li> bluetooth </li>
                                        <li> Com fio </li>
                                    </ul>
                                )}
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        </main>
    );
};