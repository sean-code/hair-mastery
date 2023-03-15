
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './components/landing/landing';
import NavBar from './components/navbar/navbar';
import Services from './components/services/services';


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
          </Routes>
        </Router>
        <Footer />
    </div>
    </>
  );
}

export default App;
