import './navbar.css';
import Cart from './assets/imgs/shopping.svg';



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
                    <span>
                        <img src={Cart} alt="cart" style={{width:'40px', marginLeft:'5px'}} />
                    </span>
                    <span className='count'>1</span>
                </ul>
                
                <h1 className="logo">Hair Mastery✂️ </h1>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;