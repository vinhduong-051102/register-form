import { Route, Routes } from "react-router-dom"
import Resgister from './components/view/resgister/Resgister'
import Table from "./components/view/table/Table";
import Nav from "./components/view/navigation/Nav";
import Home from './components/view/home/Home'
import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/resgister' element={<Resgister />} />
        <Route path='/table' element={<Table />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
