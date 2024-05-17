import Header from "./componentes/Header/header"
import Presentation from "./componentes/Presentation/presentation"
import About from "./componentes/About/about"
import Projects from "./componentes/Projects/projects"

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
