'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-900 text-white py-12">
      {/* Footer Main Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 border-b-2 border-yellow-300 inline-block pb-1">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            Finmanbd is dedicated to empowering businesses with cutting-edge financial solutions. 
            Transform your vision into reality with innovative, data-driven strategies!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 border-b-2 border-yellow-300 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: 'About Us', path: '/About' }, // Updated About Us link
              { name: 'Sign In', path: '/sign' }, // Updated Sign In link
            ].map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="text-sm hover:text-yellow-300 transition-all duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 border-b-2 border-yellow-300 inline-block pb-1">
            Contact Us
          </h3>
          <p className="text-sm">
            <strong>Phone:</strong> +88-01576672498<br />
            <strong>Email:</strong> finmanbd@gmail.com
          </p>
          <p className="text-sm mt-4">
            <strong>Address:</strong><br />
            Grow-more19, Your digital financial partner.
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300 border-b-2 border-yellow-300 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=61567797526821' },
              { icon: <FaTwitter />, link: 'https://twitter.com' },
              { icon: <FaInstagram />, link: 'https://instagram.com' },
              { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/finmanbd/' },
            ].map(({ icon, link }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-purple-600 rounded-full shadow-md hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-8 border-t border-purple-500"></div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm">
        <p className="text-gray-300">
          © {new Date().getFullYear()} GrowMore19. All rights reserved.
        </p>
        <p className="text-yellow-300 font-bold mt-2">
          "Empowering Financial Success Worldwide"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
