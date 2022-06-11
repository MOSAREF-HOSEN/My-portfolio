
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
