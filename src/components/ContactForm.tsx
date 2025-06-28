
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useFormValidation } from '../hooks/useFormValidation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { errors, touched, handleBlur, handleChange, validateForm, hasError, getError } = useFormValidation({
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    subject: { required: true, minLength: 5 },
    message: { required: true, minLength: 10, maxLength: 1000 }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    handleChange(name, value);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleBlur(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasError('name') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
                aria-describedby={hasError('name') ? 'name-error' : undefined}
              />
              {hasError('name') && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {getError('name')}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasError('email') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
                aria-describedby={hasError('email') ? 'email-error' : undefined}
              />
              {hasError('email') && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {getError('email')}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasError('phone') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(555) 123-4567"
                aria-describedby={hasError('phone') ? 'phone-error' : undefined}
              />
              {hasError('phone') && (
                <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                  {getError('phone')}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasError('subject') ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-describedby={hasError('subject') ? 'subject-error' : undefined}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Appointment Request">Appointment Request</option>
                <option value="Medical Records">Medical Records</option>
                <option value="Insurance Questions">Insurance Questions</option>
                <option value="Billing Inquiry">Billing Inquiry</option>
                <option value="Feedback">Feedback</option>
              </select>
              {hasError('subject') && (
                <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                  {getError('subject')}
                </p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                hasError('message') ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Please describe your inquiry or how we can help you..."
              aria-describedby={hasError('message') ? 'message-error' : undefined}
            />
            {hasError('message') && (
              <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                {getError('message')}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {formData.message.length}/1000 characters
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </button>
          
          <p className="text-sm text-gray-500 text-center">
            * Required fields. We'll respond within 24 hours.
          </p>
        </form>
      </div>

      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We're here to help with any questions about our services, appointments, or general inquiries. 
            Reach out through any of the following methods:
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600">Main: (555) 123-4567</p>
              <p className="text-gray-600">Emergency: (555) 911-911</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600">info@medicarehospital.com</p>
              <p className="text-gray-600">appointments@medicarehospital.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600">123 Healthcare Avenue</p>
              <p className="text-gray-600">Medical District, City 12345</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm text-blue-600 font-medium">Emergency services available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
