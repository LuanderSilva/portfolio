import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        ScrollReveal().reveal('.scroll-about', {
            origin: 'right',
            delay: 300,
            distance: "50px",
            duration: 2000,
            viewFactor: 0.7
        })
    }, [])

    return (
        <section id='s-about'>
            <div className="grid-layout">
                <div className="card-container">
                    <div className="bg-img scroll-about">
                        <img className='img-profile' src="./icons/profile-sobre.svg" alt="Perfil svg" />
                    </div>

                    <div className="content scroll-about">
                        <div className="content-text">
                            <h2 className='title-sobre'>Sobre mim</h2>
                            <h1 className='title-nome'>Luander Silva</h1>
                            <h3 className='title-frontend'>Frontend Developer </h3>
                            <p className='text'>Olá, é um prazer conhecê-lo. Como já havia falado, meu nome é Luander! Tenho 21 anos e entrei nesse mundo do desenvolvimento web por volta dos 20. Sou um apaixonado por computação e sempre fui curioso em saber como essas tecnologias funcionam, mas foi nessa idade que decidi focar de vez nesta área e a partir disso me matriculei na plataforma da Alura, onde fiz diversos cursos. Feito isso, também iniciei a faculdade de TI pela Unip.
                            </p>
                        </div>

                        <div className="icons-about scroll-about">
                            <ul className='icon-list-about'>
                                <li className='list-item-about'>
                                    <a className='link-icon-about' href="https://www.linkedin.com/in/luandersilva" target='_blank'>
                                        <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                                    </a>
                                </li>
                                <li className='list-item-about'>
                                    <a className='link-icon-about' href="https://github.com/LuanderSilva" target='_blank'>
                                        <FontAwesomeIcon icon={faGithub} className='icon'/>
                                    </a>
                                </li>
                                <li className='list-item-about'>
                                    <a className='link-icon-about' href="https://www.instagram.com/luander41/" target='_blank'>
                                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                                    </a>
                                </li>
                                <li className='list-item-about'>
                                    <a className='link-icon-about' href="https://wa.me/5511985315244" target='_blank'>
                                        <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About