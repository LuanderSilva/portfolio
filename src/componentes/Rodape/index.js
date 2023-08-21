import './Rodape.css'

const Rodape = () => {
    return (
        <section>
            <div className='rodape-conteudo'>
                <div className='conteudo-right'>
                    <h3 className='titulo-rodape'>Contatos:</h3>
                    <p className='texto-rodape'>luanderfrota22@gmail.com</p>
                    <div className='icons-right-rodape'>
                        <a href='https://www.instagram.com/luander41/' target='_blank'><img src='./imagens/icons8-instagram 1.png' className='icon-rodape'/></a>
                        <a href='https://github.com/LuanderSilva' target='_blank'><img src='./imagens/icons8-github 1.png' className='icon-rodape' /></a>
                        <a href='https://www.linkedin.com/in/luandersilva/' target='_blank'><img src='./imagens/icons8-linkedin 1.png' className='icon-rodape'/></a>
                    </div>
                </div>

                <div className='conteudo-left'>
                    <h3 className='titulo-rodape'>Ícones:</h3>
                    <p className='texto-rodape texto-icone'>Todos os ícones usados foram pegos do site <a href='https://icons8.com.br/' target='_blank'>Icons8</a></p>
                </div>
            </div>

            <div className='copy'>
                <p>Desenvolvido por Luander Silva</p>
            </div>
        </section>
    )
}

export default Rodape