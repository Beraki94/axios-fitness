import Logo from "../../images/aflogo.png";
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer class="footer">
       
        <div class="logo-section">
            <img src={Logo} alt="Website Logo"/>
            <h2>Axios Fitness</h2>
            <p>Your Ultimate Fitness Destination</p>
            <div class="social-icons">
               <Link to={"https://web.facebook.com"}><FaFacebook/></Link>
               <Link to={"https://www.instagram.com"}><AiFillInstagram/></Link>
               <Link to={"https://twitter.com"}><AiOutlineTwitter/></Link>
            </div>
        </div>
        
        <div class="quick-links">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
            </ul>
        </div>
        
        <div class="address">
            <h3>Our Address</h3>
            <p>29, Adeleye Street</p>
            <p>Sawmill, Gbagada-Lagos</p>
            <p>Email: info@fitnesshub.com</p>
            <p>Phone: +234 8164922655</p>
        </div>
        
        <div class="hours">
            <h3>Our Timings</h3>
            <p>Monday - Friday: 9:00 AM - 20:30 PM</p>
            <p>Saturday - Sunday: 10:30 AM - 19:30 PM</p>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer