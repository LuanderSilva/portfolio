import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [menuOpen])

    return (
        <header className='header-container'>
            <div className='grid-layout'>
                <nav className='nav-container'>
                    <Link to="/">
                        <img className='img-logo' src="./imagens/logo.png" alt="Minha logo - Luander" />
                    </Link>

                    <ul className='nav-list'>
                        <li className='list-item'>
                            <a className='link-icon' href="https://www.linkedin.com/in/luandersilva" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
                            </a>
                            <div className='tooltip'>Linkedin</div>
                        </li>
                        <li className='list-item'>
                            <a className='link-icon' href="https://github.com/LuanderSilva" target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                            </a>
                            <div className='tooltip'>GitHub</div>
                        </li>
                        <li className='list-item'>
                            <a className='link-icon' href="https://www.instagram.com/luander41/" target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} className='icon' />
                            </a>
                            <div className='tooltip'>Instagram</div>
                        </li>
                        <li>
                            <Link to="/contato">
                                <button className='nav-button'>Contato</button>
                            </Link>
                        </li>
                    </ul>

                    {/* ---MOBILE-MENU--- */}
                    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>

                    <div
                        className={`side-menu ${menuOpen ? 'active' : ''}`}
                        style={{ width: menuOpen ? '100%' : '0', }}
                    >
                        <ul className='mobile-nav-list'>
                            <li className='list-item-mobile'>
                                <a className='link-icon' href="https://www.linkedin.com/in/luandersilva" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
                                </a>
                                <div className='tooltip-mobile'>Linkedin</div>
                            </li>
                            <li className='list-item-mobile'>
                                <a className='link-icon' href="https://github.com/LuanderSilva" target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} className='icon' />
                                </a>
                                <div className='tooltip-mobile'>GitHub</div>
                            </li>
                            <li className='list-item-mobile'>
                                <a className='link-icon' href="https://www.instagram.com/luander41/" target='_blank'>
                                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                                </a>
                                <div className='tooltip-mobile'>Instagram</div>
                            </li>
                            <li className='list-item-mobile-button'>
                                <Link to="/contato">
                                    <button className='nav-button'>Contato</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    );
}

export default Header;
