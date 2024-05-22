import { Routes, Route } from 'react-router-dom'
import App from './App'
import Contato from './pages/Contato/contanto'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App title="Portfólio - Luander Silva"/>} />
            <Route path="contato" element={<Contato title="Portfólio - Contato"/>} />
        </Routes>
    )
}

export default AppRoutes