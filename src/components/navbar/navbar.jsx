import './navbar.css';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='navbar-main'>
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#food-menu">Testimonials</a></li>
                    <li><a href="#testimonials">Contact</a></li>
                </ul>
                <h1 class="logo">Hair Mastery ✂️ </h1>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;