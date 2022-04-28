//import React from 'react'
import  Sidebar from './components/sidebar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User"
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

const App = () => {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newUser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
        </Routes>
        </div>
      </Router>    
  );
}
export default App

//THE CODE BELOW DISPLAYS ERROR! FIX IT
/*function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar/>
        <Home />
      </div>
    </div>
  );  
}
export default App;*/

