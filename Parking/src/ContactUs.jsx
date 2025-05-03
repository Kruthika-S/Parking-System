import React from 'react';

function ContactUs() {
  return (

    
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
        
      <h1 className="text-4xl font-bold text-center mb-12 text-pink-600">Contact Us</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
        
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <i className="fas fa-phone text-pink-600 text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Phone</h3>
              <a href="tel:+919141081733" className="text-pink-600 hover:text-pink-700 hover:underline">
                +91 91410 81733
              </a>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <i className="fas fa-envelope text-pink-600 text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Email</h3>
              <a href="mailto:kruthika1208@gmail.com" className="text-pink-600 hover:text-pink-700 hover:underline">
                kruthika1208@gmail.com
              </a>
            </div>
          </div>
          
          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <i className="fab fa-instagram text-pink-600 text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Instagram</h3>
              <a 
                href="https://www.instagram.com/kruthika.s_07?igsh=MTJudjRhc3pzd3hjdw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 hover:underline"
              >
                @kruthika.s_07
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <textarea 
            placeholder="Your Message" 
            required 
            rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          ></textarea>
          <button 
            type="submit" 
            className="px-8 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;