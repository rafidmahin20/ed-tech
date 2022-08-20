import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
