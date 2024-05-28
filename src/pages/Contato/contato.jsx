import "./style.css"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import Header from "../../componentes/Header/header"
import Footer from "../../componentes/Footer/footer"

function Contato({ title }) {
    // ---Título da página---
    useEffect(() => {
        document.title = title
    }, [title])

    // ---Validação---

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    const submitConsole = () => {
        Swal.fire({
            title: "E-mail enviado com sucesso",
            icon: "success"
        })
        reset()
    }

    return (
        <>
            <Header />
            <main>
                <section id="s-contact">
                    <div className="grid-layout">
                        <div className="contact-title">
                            <h1>Envie um e-mail</h1>
                        </div>

                        <form className="form-container" onSubmit={handleSubmit(submitConsole)}>
                            <div className="inputs-form">
                                <div className="campo-nome">
                                    <input
                                        {...register("nome", { required: 'Por favor, escreva seu nome' })}
                                        type="text" name="nome"
                                        className="input-campo"
                                        placeholder="nome"
                                    />
                                    {errors.nome && <span className="error">{errors.nome.message}</span>}
                                    <label className="label">Nome</label>
                                </div>

                                <div className="campo-email">
                                    <input
                                        {...register("email", {
                                            required: 'Por favor, insira seu e-mail',
                                        })}
                                        type="email"
                                        name="email"
                                        className="input-campo"
                                        placeholder="E-mail"
                                    />
                                    {errors.email && <span className="error">{errors.email.message}</span>}
                                    <label className="label">E-mail</label>
                                </div>
                            </div>

                            <div className="campo-mensagem">
                                <textarea
                                {...register("msnBox",{
                                    required: 'Por favor, deixe uma mensagem'
                                })}
                                    name="msnBox"
                                    className="msn-box"
                                    placeholder="Escreva uma mensagem">
                                </textarea>
                                {errors.msnBox && <span className="error">{errors.msnBox.message}</span>}

                                <label className="label">Escreva uma mensagem</label>
                                <input type="submit" value="Enviar" className="button-form" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Contato