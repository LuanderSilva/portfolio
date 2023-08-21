import './Projetos.css'

const Projetos = () => {
    return (
        <section id='projetos'>
            <div className='projetos-titulo'>
                <h1>Projetos</h1>
            </div>

            <div className='projetos-conteudo'>
                <div className='projetos-numbers1-2'>
                    <div>
                        <a href='https://organo-bay-sigma.vercel.app/' target='_blank'><img className='thumb' src='./imagens/projeto1-organo.png' alt='projeto organo' /></a>
                        <p className='text'>Projeto - Organo (Alura)</p>
                    </div>

                    <div>
                        <img src='./imagens/embreve.png' alt='em breve' className='thumb thumb-embreve' />
                        <p className='text'>Em breve</p>
                    </div>
                </div>

                <div className='projetos-numbers3-4'>
                    <div>
                        <img src='./imagens/embreve.png' alt='em breve' className='thumb thumb-embreve' />
                        <p className='text'>Em breve</p>
                    </div>

                    <div>
                        <img src='./imagens/embreve.png' alt='em breve' className='thumb thumb-embreve' />
                        <p className='text'>Em breve</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos