import { Route, Routes } from "react-router-dom"
import Resgister from './view/resgister/Resgister'
import Table from "./view/table/Table";
import Nav from "./view/navigation/Nav";
import Home from './view/home/Home'
import Log from "./view/log_in/Log";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/resgister' element={<Resgister />} />
        <Route path='/table' element={<Table />} />
        <Route path='/' element={<Home />} />
        <Route path='/log_in' element={<Log />} />
      </Routes>

    </div>
  );
}

export default App;
