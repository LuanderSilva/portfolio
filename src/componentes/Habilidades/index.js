import './Habilidades.css'

const Habilidades = () => {
    return (
        <section id='habilidades'>
            <div className='titulo'>
                <h1>Habilidades</h1>
            </div>

            <div className='conteudo'>
                <div className='html-css-js'>
                    <img className='logo' src='./imagens/logo-html.png' />
                    <img className='logo' src='./imagens/logo-css3.png' />
                    <img className='logo' src='./imagens/logo-javascript.png' />
                </div>

                <div>
                    <img className='logo' src='./imagens/logo-react.png' />
                </div>
            </div>
        </section>
    )
}

export default Habilidades