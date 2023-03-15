import './navbar.css';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='navbar-main'>
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <h1 className="logo">Hair Mastery✂️ </h1>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;