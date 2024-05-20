import './style.css'
import Skillcard from '../../SkillCard/skillcard'
import { useState } from 'react'

function Skills() {
    const [defaultDescription, setDefaultDescription] = useState('*passe o cursor do mouse no card para ler*')

    const skills = [
        {
            imgSrc: "./icons/html.svg",
            altText: "ícone do HTML",
            description: "HTML é uma linguagem de marcação usada para estruturar e exibir conteúdo na tela.",
            delay: 300
        },
        {
            imgSrc: "./icons/css.svg",
            altText: "ícone do CSS3",
            description: "CSS é uma linguagem de estilo usada para estilizar elementos escritos em uma linguagem de marcação.",
            delay: 500
        },
        {
            imgSrc: "./icons/js.svg",
            altText: "ícone do JavaScript",
            description: "JavaScript é uma linguagem de programação que permite criar conteúdo dinâmico.",
            delay: 700
        },
        {
            imgSrc: "./icons/ts.svg",
            altText: "ícone do TypeScript",
            description: "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript.",
            delay: 900
        },
        {
            imgSrc: "./icons/next.svg",
            altText: "ícone do Next.js",
            description: "Next.js é um framework para React que permite a renderização do lado do servidor e geração de sites estáticos.",
            delay: 1100
        },
        {
            imgSrc: "./icons/react.svg",
            altText: "ícone do React.js",
            description: "React é uma biblioteca JavaScript para construir interfaces de usuário.",
            delay: 1300
        },
        {
            imgSrc: "./icons/sass.svg",
            altText: "ícone do Sass",
            description: "Sass é um pré-processador de CSS que adiciona recursos especiais.",
            delay: 1500
        },
        {
            imgSrc: "./icons/styled-components.svg",
            altText: "ícone do styled-components",
            description: "styled-components é uma biblioteca para React que permite usar CSS dentro de componentes JavaScript.",
            delay: 1700
        }
    ]

    const handleMouseEnter = (description) => {
        setDefaultDescription(description)
    }

    const handleMouseLeave = () => {
        setDefaultDescription('*passe o cursor do mouse no card para ler*')
    }

    return (
        <section id='s-skills'>
            <div className='grid-layout content-container'>
                <div className="content-text-skills">
                    <h1>Conhecimentos</h1>
                    <p>{defaultDescription}</p>
                </div>

                <div className="skills-cards">
                    {skills.map((skill, index) => (
                        <Skillcard
                            key={index}
                            imgSrc={skill.imgSrc}
                            altText={skill.altText}
                            delay={skill.delay}
                            onMouseEnter={() => handleMouseEnter(skill.description)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills