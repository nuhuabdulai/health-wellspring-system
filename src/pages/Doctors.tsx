
import React, { useState } from 'react';
import { Search, Filter, Star, Calendar, MapPin, Phone, Mail, Award } from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      experience: '15 years',
      education: 'MD - Harvard Medical School',
      awards: ['Best Cardiologist 2023', 'Excellence in Patient Care'],
      availability: 'Available Today',
      location: 'Main Building, Floor 3',
      phone: '+1 (555) 123-0001',
      email: 'dr.chen@medicare.com',
      bio: 'Renowned cardiologist specializing in interventional cardiology and heart failure management.',
      languages: ['English', 'Mandarin', 'Spanish']
    },
    {
      id: 2,
      name: 'Dr. Sarah Williams',
      specialty: 'Neurology',
      image: 'https://images.unsplash.com/photo-1594824475317-29bb4cb10c4a?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      experience: '12 years',
      education: 'MD - Johns Hopkins University',
      awards: ['Neurologist of the Year 2022'],
      availability: 'Available Tomorrow',
      location: 'Neurology Center, Floor 2',
      phone: '+1 (555) 123-0002',
      email: 'dr.williams@medicare.com',
      bio: 'Expert in stroke treatment and neurological disorders with focus on patient-centered care.',
      languages: ['English', 'French']
    },
    {
      id: 3,
      name: 'Dr. James Thompson',
      specialty: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      rating: 4.7,
      experience: '18 years',
      education: 'MD - Mayo Clinic School of Medicine',
      awards: ['Sports Medicine Excellence Award'],
      availability: 'Available Today',
      location: 'Orthopedic Wing, Floor 1',
      phone: '+1 (555) 123-0003',
      email: 'dr.thompson@medicare.com',
      bio: 'Specializes in joint replacement surgery and sports medicine with minimally invasive techniques.',
      languages: ['English', 'German']
    },
    {
      id: 4,
      name: 'Dr. Maria Garcia',
      specialty: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      experience: '10 years',
      education: 'MD - Stanford University School of Medicine',
      awards: ['Pediatric Care Excellence Award'],
      availability: 'Available Today',
      location: 'Pediatric Center, Floor 2',
      phone: '+1 (555) 123-0004',
      email: 'dr.garcia@medicare.com',
      bio: 'Compassionate pediatrician dedicated to providing comprehensive care for children of all ages.',
      languages: ['English', 'Spanish', 'Portuguese']
    },
    {
      id: 5,
      name: 'Dr. David Kim',
      specialty: 'Emergency Medicine',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      experience: '14 years',
      education: 'MD - University of California, San Francisco',
      awards: ['Emergency Medicine Leadership Award'],
      availability: 'On Duty 24/7',
      location: 'Emergency Department',
      phone: '+1 (555) 123-0005',
      email: 'dr.kim@medicare.com',
      bio: 'Experienced emergency physician with expertise in trauma care and critical medicine.',
      languages: ['English', 'Korean', 'Japanese']
    },
    {
      id: 6,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Surgery',
      image: 'https://images.unsplash.com/photo-1594824475317-29bb4cb10c4a?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      experience: '16 years',
      education: 'MD - Cleveland Clinic Lerner College of Medicine',
      awards: ['Surgical Innovation Award 2023'],
      availability: 'Available Tomorrow',
      location: 'Surgical Suite, Floor 4',
      phone: '+1 (555) 123-0006',
      email: 'dr.rodriguez@medicare.com',
      bio: 'Leading surgeon specializing in minimally invasive and robotic surgical procedures.',
      languages: ['English', 'Spanish', 'Italian']
    }
  ];

  const departments = ['all', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Emergency Medicine', 'Surgery'];
  const availabilityOptions = ['all', 'Available Today', 'Available Tomorrow', 'On Duty 24/7'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.specialty === selectedDepartment;
    const matchesAvailability = selectedAvailability === 'all' || doctor.availability === selectedAvailability;
    
    return matchesSearch && matchesDepartment && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Doctors</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Meet our team of highly qualified physicians committed to providing exceptional healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Filter */}
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>

            {/* Availability Filter */}
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
            >
              {availabilityOptions.map(option => (
                <option key={option} value={option}>
                  {option === 'all' ? 'All Availability' : option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-600 text-sm ml-1">{doctor.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doctor.availability === 'Available Today' 
                          ? 'bg-green-100 text-green-800'
                          : doctor.availability === 'On Duty 24/7'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {doctor.availability}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.email}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
