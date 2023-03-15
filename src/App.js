
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './components/landing/landing';
import NavBar from './components/navbar/navbar';
import Services from './components/services/services';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';


function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' />
            <Route path='/services' element={<Services/>}/>
            <Route path='/testimonials' element={<Testimonial />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
    </div>
    </>
  );
}

export default App;
