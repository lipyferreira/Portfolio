import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from './pages/Home/'
import Projetos from "./pages/Projetos/index.jsx"
import Header from "./components/Header"
import Contato from "./pages/Contato";
import Error from "./pages/Error";

export default function RouteApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}    