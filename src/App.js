import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/AppComponents/Navbar';
import AboutUs from './pages/AboutUs';
import MyResumes from './pages/MyResumes';
import DetailsFiling from './pages/DetailsFiling'
import Footer from './components/AppComponents/Footer';


function App() {
  return (
   <>
  
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/'  element={<Home/>}/>
   <Route path='/myresume'  element={<MyResumes/>}/>
   <Route path='/about'  element={<AboutUs/>}/>
   <Route path='/fill-details'  element={<DetailsFiling/>}/>
  
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   

  
   
   </>
  );
}

export default App;
