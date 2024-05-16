import { useEffect } from 'react';
import './style.css'
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from 'scrollreveal';

function Presentation() {
    useEffect(() => {
        ScrollReveal().reveal('.scroll-reveal', {
            origin: 'bottom',
            delay: 300,
            distance: "50px",
            duration: 2000,
        })
    }, [])

    return (
        <section id='s-presentation' className='scroll-reveal'>
            <h1 className='presentation-title'>Olá, seja bem-vindo! Me chamo <span>Luander</span> e sou um Front-End Developer.</h1>
            <TypeAnimation
                sequence={[
                    'Gosto de desenvolver coisas e isso para mim é mais do que uma atividade. É uma paixão!',
                ]}
                speed={200}
                wrapper='p'
                loop={false}
                style={{
                    margin: '25px 0',
                    fontSize: '1.2rem',
                    maxWidth: '500px',
                    color: '#94A1B2',
                    fontFamily: 'Roboto, sans-serif'
                }}
            />
            <button className='presentation-button'>Contato</button>
        </section>
    )
}

export default Presentation