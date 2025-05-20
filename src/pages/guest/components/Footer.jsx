// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span id="logo-title" className="font-poppins text-[18px] text-white-900">
                Sedap <b id="logo-dot" className="text-hijau">.</b>
            </span>
          </div>
          <h4 className="text-xl font-semibold leading-snug mb-3">
            The Best Restaurants in Your Home
          </h4>
          <p className="text-sm text-gray-400">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
            pretium quam.
          </p>
        </div>

        {/* Column 2 - Menu */}
        <div>
          <h5 className="font-semibold text-lg mb-4">MENU</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Restaurants</a></li>
            <li><a href="#" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>

        {/* Column 3 - Contacts */}
        <div>
          <h5 className="font-semibold text-lg mb-4">CONTACTS</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>1717 Harrison St, San Francisco, CA 94103, United States</li>
            <li>Sedap@mail.net</li>
            <li>+1 425 326 16 27</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center">
              <i className="fab fa-facebook-f text-white text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center">
              <i className="fab fa-twitter text-white text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center">
              <i className="fab fa-instagram text-white text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
        <p>Copyright © 2022 Sedap. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Services</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
