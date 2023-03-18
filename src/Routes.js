import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/landing/landing';
import Services from './components/services/services';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';



const Routing = () =>{
    return(
        <>
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
      </div>
      </>
    )
}

export default Routing;