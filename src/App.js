import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import SignIn from './Component/Login/SignIn/SignIn';
import CreateAccount from './Component/Login/CreateAccount/CreateAccount';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sign' element={<SignIn></SignIn>}></Route>
        <Route path='/create' element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
