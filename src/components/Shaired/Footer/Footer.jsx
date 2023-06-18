
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full px-8'>
        <footer className="bg-gray-900 text-white px-8">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="order-3 md:order-1">
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare turpis in magna
              vestibulum, ut facilisis ligula vestibulum. Suspendisse potenti.
            </p>
          </div>
          <div className="order-2 md:order-3">
            <h3 className="text-xl font-bold mb-4">Google Map</h3>
            <div className="bg-gray-400 h-40">Google Map</div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-gray-400">
              <li>
                <FaMapMarkerAlt className="inline mr-2" />
                123 Street, City, Country
              </li>
              <li>
                <FaPhone className="inline mr-2" />
                +88 01981-592828
              </li>
              <li>
                <FaEnvelope className="inline mr-2" />
                info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">© 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
