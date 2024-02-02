import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import MyResumes from './pages/MyResumes';
import DetailsFiling from './pages/DetailsFiling'


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
   </BrowserRouter>
   
   
  
  
   
   </>
  );
}

export default App;
