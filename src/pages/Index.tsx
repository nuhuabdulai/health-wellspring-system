import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Users, Building2, Heart, Shield, Award, Clock, MapPin, Mail } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import EventsCalendar from '../components/EventsCalendar';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care with advanced cardiac procedures and treatments.',
      link: '/departments'
    },
    {
      icon: Building2,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care.',
      link: '/emergency'
    },
    {
      icon: Users,
      title: 'Specialists',
      description: 'Over 500 expert doctors across 25+ medical specialties.',
      link: '/doctors'
    },
    {
      icon: Shield,
      title: 'Surgery',
      description: 'Advanced surgical procedures with minimally invasive techniques.',
      link: '/departments'
    }
  ];

  const stats = [
    { number: '35+', label: 'Years of Excellence' },
    { number: '500+', label: 'Expert Doctors' },
    { number: '50,000+', label: 'Happy Patients' },
    { number: '25+', label: 'Departments' }
  ];

  const newsAlerts = [
    {
      type: 'Health Alert',
      title: 'Flu Season Preparation - Get Your Vaccination',
      date: '2024-01-15',
      urgent: true
    },
    {
      type: 'Announcement',
      title: 'New Cardiac Surgery Wing Now Open',
      date: '2024-01-10',
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Health Alerts Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="font-semibold">🚨 HEALTH ALERT:</span>
            <span>Flu vaccinations now available - Book your appointment today</span>
            <Link to="/appointments" className="underline hover:no-underline">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Providing compassionate, world-class medical care with cutting-edge technology and expert physicians since 1985.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link
                to="/emergency"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (555) 911-911
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by our team of expert physicians and healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Events Calendar */}
      <EventsCalendar />

      {/* News & Alerts */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health News & Alerts</h2>
            <p className="text-gray-600">Stay informed about important health updates and hospital announcements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-6 ${
                alert.urgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-blue-50 border-l-4 border-blue-500'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.type}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{alert.title}</h3>
                    <p className="text-gray-600 text-sm">{alert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Health News
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Services</h2>
          <p className="text-xl text-red-100 mb-6">24/7 emergency care when you need it most</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-2xl font-bold">(555) 911-911</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>123 Healthcare Ave, Medical District</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Main: (555) 123-4567</p>
              <p className="text-gray-600">Emergency: (555) 911-911</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8AM-8PM</p>
              <p className="text-gray-600">Weekend: 9AM-5PM</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@medicarehospital.com</p>
              <p className="text-gray-600">appointments@medicarehospital.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
