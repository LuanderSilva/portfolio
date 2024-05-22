import { useEffect } from "react"
import Header from "../../componentes/Header/header"

function Contato({ title }) {

    // ---Título da página---
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <>
            <Header />
        </>
    )
}

export default Contato