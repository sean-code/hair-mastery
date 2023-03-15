
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Home from './components/landing/landing';
import NavBar from './components/navbar/navbar';


function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' />
          </Routes>
        </Router>
        <Footer />
    </div>
    </>
  );
}

export default App;
