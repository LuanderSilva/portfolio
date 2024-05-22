import { useEffect } from "react"
import Header from "./componentes/Header/header"
import Presentation from "./componentes/Presentation/presentation"
import About from "./componentes/About/about"
import Projects from "./componentes/Projects/projects"
import Skills from "./componentes/Skills/skills"
import Footer from "./componentes/Footer/footer"

function App({ title }) {
  
  // ---Título da página---
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
