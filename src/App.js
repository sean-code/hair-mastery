
import './App.css';
import Footer from './components/footer/footer';
import Home from './components/landing/landing';
import NavBar from './components/navbar/navbar';


function App() {
  
  return (
    <>
      <NavBar />
      <div className="App">
        <Home />
        <Footer />
     
     </div>
    </>
   
  );
}

export default App;
