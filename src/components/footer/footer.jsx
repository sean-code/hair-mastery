import './footer.css';


const Footer = () => {
    return(
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Hair-Mastery <i>CODE WANTS TO BE SIMPLE </i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed dapibus velit. Nam non libero at sapien lobortis iaculis. Sed ullamcorper ipsum vel quam luctus cursus. Nulla aliquam libero in leo pharetra semper. Fusce gravida porttitor placerat. Vestibulum eu aliquet urna, id tincidunt velit. Etiam at risus vestibulum, euismod nulla id, mollis enim. Nunc porttitor eros sed consequat pretium. Maecenas bibendum tortor sit amet sapien malesuada, a pretium lectus tempus.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Outlets</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/front-end-development/">Shop A</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Shop B</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Shop C</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Shop D</a></li>
                                <li><a href="http://scanfcode.com/category/templates/">Shop E</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Services</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2023 All Rights Reserved
                        </p>
                </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer;