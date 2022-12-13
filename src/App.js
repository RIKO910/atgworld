import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
