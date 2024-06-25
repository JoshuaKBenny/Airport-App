import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import FaqPage from './components/FaqPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/AboutPage" element={<AboutPage/>}/>
<Route path="/ServicesPage" element={<ServicesPage/>}/>
<Route path="/ContactPage" element={<ContactPage/>}/>
<Route path="/FaqPage" element={<FaqPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
