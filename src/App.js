import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/primerTema/1/Home"
import Search from "./components/primerTema/1/Search"
// import SearchRedireccionado from "./components/segundoTema/SearchRedireccionado"

const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      {/* <Route path="/redireccion/:nombre" element={<SearchRedireccionado />}></Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App;
