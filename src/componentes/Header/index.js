import { useState } from 'react';
import './Header.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className='cabecalho'>
            <nav>
                <div className={`menu-container ${isMenuOpen ? 'menu-aberto' : ''}`}>
                    <img src='./imagens/menu-cardapio.png' className='menu' onClick={toggleMenu} alt='Menu Hamburguer' />
                    <ul className='cabecalho-conteudo container'>
                        <li className='cabecalho-sobremim'>
                            <Link className='rolagem' onClick={closeMenu}
                                activeClass="active"
                                to="sobremim"
                                spy={true}
                                smooth={true}
                                offset={-60} // Ajuste conforme necessário
                                duration={500}>
                                <img src='../imagens/icon-sobremim.png' alt='icon-sobremim' className='icon' />
                                Sobre mim
                            </Link>
                        </li>

                        <li className='cabecalho-projetos'>
                            <Link className='rolagem' onClick={closeMenu}
                                activeClass='active'
                                to='projetos'
                                spy={true}
                                smooth={true}
                                offset={-100} // Ajuste conforme necessário
                                duration={500}>
                                <img src='../imagens/icon-projetos.png' alt='icon-projetos' className='icon' />
                                Projetos
                            </Link>
                        </li>

                        <li className='cabecalho-habilidades'>
                            <Link className='rolagem' onClick={closeMenu}
                                activeClass='active'
                                to='habilidades'
                                spy={true}
                                smooth={true}
                                offset={-70} // Ajuste conforme necessário
                                duration={500}>
                                <img src='../imagens/icon-habilidades.png' alt='icon-habilidades' className='icon' />
                                Habilidades
                            </Link>
                        </li>

                        <li className='cabecalho-certificados'>
                            <Link className='rolagem' onClick={closeMenu}
                                activeClass='active'
                                to='certificados'
                                spy={true}
                                smooth={true}
                                offset={-70} // Ajuste conforme necessário
                                duration={500}>
                                <img src='./imagens/icon-certificados.png' alt='icon-certificados' className='icon' />
                                Certificados
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header