
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              MSME Credit Access Platform
            </h3>
            <p>
              Empowering small businesses with innovative financial solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: info@msmecredit.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Finance Street, Business City, 12345</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 MSME Credit Access Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
