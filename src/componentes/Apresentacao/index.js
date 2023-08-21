import './Apresentacao.css'

const Apresentacao = () => {
    return (
        <section className='secao-apresentacao' id='apresentacao'>
            <div className='secao-apresentacao-conteudo'>
                <div className='secao-apresentacao-escrito'>
                    <div className='titulo-nome'>
                        <h1>Prazer, me chamo Luander</h1>
                    </div>

                    <p className='texto'>Sou um desenvolvedor <span>Front-End.</span></p>

                    <a className='link-linkedin' href='https://www.linkedin.com/in/luandersilva/' target='_blank'>Linkedin</a>
                </div>

                <div className='secao-apresentacao-imagem'>
                    <img src='../imagens/my.png' alt='Minha foto' />
                </div>
            </div>
        </section>
    )
}

export default Apresentacao