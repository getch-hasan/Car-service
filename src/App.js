import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './Pages/About/About';
import Action from './Pages/Home/Action/Action';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequreAuth from './Pages/Login/RequreAuth/RequreAuth';
import ServiceDitail from './Pages/ServiceDitail/ServiceDitail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDitail></ServiceDitail>}> </Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='action' element={<RequreAuth>
          <Action></Action>
        </RequreAuth>}></Route>


      </Routes>
      <Footer></Footer>
     
     
    </div>
  );
}

export default App;
