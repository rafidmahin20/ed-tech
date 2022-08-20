import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/Home/ProductPage';
// import Signup from './Components/Login/Signup';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<ProductPage/>}/>
      {/* <Route path='/signup' element={<Signup/>}/> */}
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
