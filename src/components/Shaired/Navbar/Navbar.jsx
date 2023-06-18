import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/Logo/logo-symbol-dark.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full pt-4 px-8">
      <nav className="w-full navbar bg-black opacity-90">
        <div className="w-full navbar-container flex items-center mx-auto justify-between px-4 py-2">
          <div className="flex justify-center items-center gap-10 bg-black">
            <div className="logo text-xl font-bold">
              <img src={logo} alt="" />
            </div>
            <ul className="nav-menu flex space-x-4">
              <li>
                <Link className="nav-item text-white" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-item text-white" to="/about">About</Link>
              </li>
              <li>
                <Link className="nav-item text-white" to="/services">Services</Link>
              </li>
              <li>
                <Link className="nav-item text-white" to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className="nav-item text-white" to="/blog">Blog</Link>
              </li>
              <li>
                <Link className="nav-item text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="bg-black social-icons flex space-x-2 justify-center items-center">
            <FaFacebook className="social-icon text-white" />
            <FaInstagram className="social-icon text-white" />
            <FaPinterest className="social-icon text-white" />
            <FaTwitter className="social-icon text-white" />
            <button className="buy-now-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
