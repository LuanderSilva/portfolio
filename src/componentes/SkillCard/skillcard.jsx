import './style.css'
import ScrollReveal from 'scrollreveal'
import { useEffect, useRef } from 'react'

function Skillcard({ imgSrc, altText, delay, onMouseEnter, onMouseLeave }) {
    const cardRef = useRef(null)

    useEffect(() => {
        ScrollReveal().reveal(cardRef.current, {
            delay,
            origin: 'top',
            distance: "50px",
            duration: 2000
        })
    }, [delay])

    return (
        <section
            ref={cardRef}
            className='card-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img src={imgSrc} alt={altText} />
        </section>
    )
}

export default Skillcard