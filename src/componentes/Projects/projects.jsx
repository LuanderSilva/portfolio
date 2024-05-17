import './style.css'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Projects() {
    const revealElements = [
        { selector: '.scroll-projects-1', delay: 300 },
        { selector: '.scroll-projects-2', delay: 500 },
        { selector: '.scroll-projects-3', delay: 700 }
    ];

    useEffect(() => {
        revealElements.forEach(({ selector, delay }) => {
            ScrollReveal().reveal(selector, {
                origin: 'top',
                delay: delay,
                distance: "50px",
                duration: 2000
            });
        });
    }, []);

    return (
        <section id='s-projects'>
            <div className="grid-layout">
                <div className="title-projects">
                    <h1>Projetos</h1>
                    <span className='border'></span>
                </div>

                <div className="projects">
                    <div className="project-1 scroll-projects-1">
                        <a href="https://pixelanime-news.vercel.app/" target='_blank'>
                            <div className="gradient"></div>
                            <img className='img-projeto'
                                src="./imagens/projeto1-pixeanime.png"
                                alt="Projeto Pixel Anime, um site de notícias nerd"
                            />
                            <p className='description-project'>Site de notícias nerd, construído com Next.js</p>
                        </a>
                    </div>

                    <div className="project-2 scroll-projects-2">
                        <a href="https://newstore-phi.vercel.app/" target='_blank'>
                            <div className="gradient"></div>
                            <img className='img-projeto'
                                src="./imagens/projeto2-newstore.png"
                                alt="Um e-commerce chamado New Store"
                            />
                            <p className='description-project'>E-commerce, construído com React.js</p>
                        </a>
                    </div>

                    <div className="project-3 scroll-projects-3">
                        <a href="https://zesty-granita-a5b0e3.netlify.app/" target='_blank'>
                            <div className="gradient"></div>
                            <img className='img-projeto img-projeto-3'
                                src="./imagens/projeto3-gerenciador.png"
                                alt="Um gerenciador de tarefas"
                            />
                            <p className='description-project'>Gerenciador de tarefas, construído com React.js</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects