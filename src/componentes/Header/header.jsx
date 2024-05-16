import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header className='header-container'>
            <div className='grid-layout'>
                <nav className='nav-container'>
                    <img className='img-logo' src="./imagens/logo.png" alt="Minha logo - Luander" />

                    <ul className='nav-list'>
                        <li className='list-item'>
                            <a className='link-icon' href="https://www.linkedin.com/in/luandersilva" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                            </a>
                            <div className='tooltip'>Linkedin</div>
                        </li>
                        <li className='list-item'>
                            <a className='link-icon' href="https://github.com/LuanderSilva" target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className='icon'/>
                            </a>
                            <div className='tooltip'>GitHub</div>
                        </li>
                        <li className='list-item'>
                            <a className='link-icon' href="https://www.instagram.com/luander41/" target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} className='icon'/>
                            </a>
                            <div className='tooltip'>Instagram</div>
                        </li>
                        <li>
                            <button className='nav-button'>Contato</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header