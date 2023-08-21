import './Subir.css'
import { Link, animateScroll as scroll } from 'react-scroll';

const Subir = () => {
    return (
        <div className='fixed-icons-subir'>
            <ul>
                <li>
                    <Link className='rolagem'
                        activeClass="active"
                        to="apresentacao"
                        spy={true}
                        smooth={true}
                        offset={-60} 
                        duration={500}>
                        <img src='../imagens/subir.png' alt='' />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Subir