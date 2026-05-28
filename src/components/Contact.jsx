import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Dynamic backend endpoint URL configuration
    const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Clear all form inputs
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setErrors({
          submit: data.error || 'Server validation failed.'
        });
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Contact form submission API error:', err);
      setErrors({
        submit: 'Could not connect to the backend server. Please verify it is running on port 5000.'
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#0f172a] border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a question or want to discuss a potential internship opportunity? Drop a message!
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left Column: Contact Details */}
          <div className="md:col-span-5 space-y-6 bg-[#0b1329] p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Please feel free to connect via the form or through my professional coordinates below. I'll get back to you as soon as possible!
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Contact Item: Email */}
              <div className="flex items-center space-x-4 p-3 bg-[#0f172a] rounded-xl border border-slate-800/60">
                <div className="bg-indigo-500/10 p-2.5 rounded-lg text-indigo-400">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-medium">Email Address</h4>
                  <a href="mailto:shyamsunder@gmail.com" className="text-white hover:text-indigo-400 text-sm font-semibold transition-colors duration-200">
                    shyamsunder@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Item: Location */}
              <div className="flex items-center space-x-4 p-3 bg-[#0f172a] rounded-xl border border-slate-800/60">
                <div className="bg-indigo-500/10 p-2.5 rounded-lg text-indigo-400">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-medium">Current Location</h4>
                  <p className="text-white text-sm font-semibold">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social handles block */}
            <div className="border-t border-slate-800 pt-6">
              <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Connect on Socials</h4>
              <div className="flex space-x-4 text-xl text-slate-400">
                <a 
                  href="https://github.com/karambiht" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-slate-900 rounded-lg hover:text-white hover:bg-slate-850 hover:-translate-y-1 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shaam-sunder-v-64b03a407/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-slate-900 rounded-lg hover:text-white hover:bg-slate-850 hover:-translate-y-1 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Form UI */}
          <div className="md:col-span-7 bg-[#0b1329] p-6 sm:p-8 rounded-2xl border border-slate-800">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full bg-[#0f172a] text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name 
                      ? 'border-red-500/70 focus:ring-red-500/30' 
                      : 'border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className={`w-full bg-[#0f172a] text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-red-500/70 focus:ring-red-500/30' 
                      : 'border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  className={`w-full bg-[#0f172a] text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-red-500/70 focus:ring-red-500/30' 
                      : 'border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 font-semibold">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-250 cursor-pointer disabled:bg-indigo-700/60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Notification Banner */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-lg text-center animate-fade-in">
                  Thank you! Your message was submitted successfully.
                </div>
              )}

              {/* Error Notification Banner */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold rounded-lg text-center animate-fade-in">
                  {errors.submit || 'An error occurred while sending your message. Please try again.'}
                </div>
              )}


            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
