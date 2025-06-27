
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageCircle, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      department: '',
      message: '',
      preferredContact: 'email'
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Hospital: (555) 123-4567',
        'Emergency: (555) 911-911',
        'Appointments: (555) 123-BOOK',
        'Billing: (555) 123-BILL'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General Info: info@medicarehospital.com',
        'Appointments: appointments@medicarehospital.com',
        'Billing: billing@medicarehospital.com',
        'Careers: careers@medicarehospital.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Hospital Address',
      details: [
        '123 Healthcare Avenue',
        'Medical District',
        'City, State 12345',
        'United States'
      ]
    },
    {
      icon: Clock,
      title: 'Hours of Operation',
      details: [
        'Emergency: 24/7',
        'Main Hospital: Mon-Fri 8AM-8PM',
        'Outpatient: Mon-Fri 7AM-7PM',
        'Weekend: Sat-Sun 9AM-5PM'
      ]
    }
  ];

  const departments = [
    'General Inquiry',
    'Appointments',
    'Billing & Insurance',
    'Patient Services',
    'Medical Records',
    'Human Resources',
    'Emergency Services',
    'Administration'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Reach out to us with questions, concerns, or to schedule an appointment.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Phone</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Quick Actions */}
            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:555-123-4567"
                  className="flex items-center p-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Call Main Number</span>
                </a>
                <a
                  href="/appointments"
                  className="flex items-center p-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Building2 className="w-5 h-5 mr-3" />
                  <span>Schedule Appointment</span>
                </a>
                <a
                  href="tel:555-911-911"
                  className="flex items-center p-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Emergency Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hospital Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">MediCare Hospital</p>
                      <p className="text-gray-600">123 Healthcare Avenue</p>
                      <p className="text-gray-600">Medical District, City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">Main Hospital & Emergency Entrance</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Parking Information</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Free patient parking in Main Garage</li>
                    <li>• Valet parking available at main entrance</li>
                    <li>• Visitor parking in South Lot</li>
                    <li>• Emergency parking near ER entrance</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Public Transportation</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Metro Bus Routes 15, 22, 45</li>
                    <li>• Medical District Metro Station (0.3 miles)</li>
                    <li>• Hospital shuttle service available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration would be implemented here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
