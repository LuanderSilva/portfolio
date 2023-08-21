import Apresentacao from "../Apresentacao"
import Certificados from "../Certificados"
import Habilidades from "../Habilidades"
import Projetos from "../Projetos"
import Sobremim from "../Sobremim"
import Rodape from "../Rodape"

const Main = () => {
    return (
        <main>
            <Apresentacao />
            <Sobremim />
            <Projetos />
            <Habilidades />
            <Certificados />
            <Rodape />
        </main>
    )
}

export default Main