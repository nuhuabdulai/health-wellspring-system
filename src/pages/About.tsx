
import React from 'react';
import { Award, Users, Heart, Shield, Target, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '35+', label: 'Years of Excellence' },
    { number: '500+', label: 'Expert Doctors' },
    { number: '50,000+', label: 'Happy Patients' },
    { number: '25+', label: 'Departments' },
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading healthcare innovation with 25+ years of experience in hospital administration.',
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      bio: 'Renowned cardiologist with expertise in advanced cardiac procedures and patient care.',
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Nursing Officer',
      image: 'https://images.unsplash.com/photo-1594824475317-29bb4cb10c4a?w=400&h=400&fit=crop&crop=face',
      bio: 'Passionate about nursing excellence and patient safety with 20+ years of experience.',
    },
  ];

  const certifications = [
    'Joint Commission Accreditation',
    'ISO 9001:2015 Quality Management',
    'HIMSS Analytics Stage 7',
    'Magnet Recognition Program',
    'AAAHC Accreditation',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare Hospital</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence since 1985.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional, patient-centered healthcare services while advancing medical knowledge through research and education. We are committed to treating every patient with compassion, dignity, and respect, ensuring they receive the highest quality care in a safe and healing environment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the premier healthcare institution recognized for clinical excellence, innovative treatments, and exceptional patient experience. We strive to set the standard for healthcare delivery while fostering a culture of continuous improvement and medical advancement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of medical expertise and healthcare administration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications & Awards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized through various prestigious certifications and awards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg flex items-center">
                <Award className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">We treat every patient with empathy, kindness, and understanding.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all aspects of patient care.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest ethical standards in all our interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
