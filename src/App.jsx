import Header from "./componentes/Header/header"
import Presentation from "./componentes/Presentation/presentation"
import About from "./componentes/About/about"
import Projects from "./componentes/Projects/projects"
import Skills from "./componentes/Skills/skills"

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

export default App
