import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import StatusBar from './components/Commons/StatusBar/StatusBar';
import Header from './components/Commons/Header/Header';
import Home from './components/HomePage/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignUp from './components/Authentication/SignUp/SignUp';
import SignIn from './components/Authentication/SignIn/SignIn';
import NotFound from './components/Commons/NotFound/NotFound';
import Footer from './components/Commons/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/Authentication/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <StatusBar></StatusBar>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/productDetails/:id' element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth> }></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
