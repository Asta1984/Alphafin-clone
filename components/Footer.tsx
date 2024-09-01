import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">1234 Example St.</p>
            <p className="mb-2">City, State, 56789</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-4 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

