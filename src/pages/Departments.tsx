import React from 'react';
import { Heart, Brain, Bone, Baby, Eye, Stethoscope, Scissors, Users } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Departments = () => {
  const departments = [
    {
      name: 'Cardiology',
      icon: Heart,
      description: 'Comprehensive heart care including diagnosis and treatment of cardiovascular diseases.',
      services: ['Cardiac Catheterization', 'Echocardiography', 'Stress Testing', 'Heart Surgery', 'Pacemaker Implantation'],
      doctors: ['Dr. Michael Chen', 'Dr. Sarah Williams', 'Dr. James Thompson'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'Neurology',
      icon: Brain,
      description: 'Expert care for disorders of the nervous system including brain and spinal cord.',
      services: ['Brain Surgery', 'Stroke Treatment', 'Epilepsy Care', 'Memory Disorders', 'Parkinson\'s Treatment'],
      doctors: ['Dr. Lisa Anderson', 'Dr. Robert Martinez', 'Dr. Jennifer Davis'],
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop'
    },
    {
      name: 'Orthopedics',
      icon: Bone,
      description: 'Specialized care for bones, joints, muscles, and the musculoskeletal system.',
      services: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Fracture Care', 'Arthroscopy'],
      doctors: ['Dr. Mark Johnson', 'Dr. Amy Rodriguez', 'Dr. Kevin Lee'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    },
    {
      name: 'Pediatrics',
      icon: Baby,
      description: 'Comprehensive healthcare for infants, children, and adolescents.',
      services: ['Well-child Visits', 'Immunizations', 'Pediatric Surgery', 'Developmental Assessment', 'Emergency Pediatrics'],
      doctors: ['Dr. Maria Garcia', 'Dr. David Kim', 'Dr. Amanda White'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
    {
      name: 'Emergency Medicine',
      icon: Stethoscope,
      description: '24/7 emergency care for urgent medical conditions and trauma.',
      services: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Poison Control', 'Cardiac Emergency'],
      doctors: ['Dr. Christopher Brown', 'Dr. Rachel Taylor', 'Dr. Daniel Wilson'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop'
    },
    {
      name: 'Surgery',
      icon: Scissors,
      description: 'Advanced surgical procedures with minimally invasive techniques.',
      services: ['General Surgery', 'Laparoscopic Surgery', 'Robotic Surgery', 'Transplant Surgery', 'Vascular Surgery'],
      doctors: ['Dr. Steven Clark', 'Dr. Michelle Lewis', 'Dr. Andrew Miller'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={[{ label: 'Departments' }]} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive medical care across specialized departments with expert physicians and state-of-the-art facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{dept.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Services Offered:</h3>
                          <ul className="space-y-2">
                            {dept.services.map((service, idx) => (
                              <li key={idx} className="text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Department Doctors:</h3>
                          <ul className="space-y-2">
                            {dept.doctors.map((doctor, idx) => (
                              <li key={idx} className="text-gray-600 flex items-center">
                                <Users className="w-4 h-4 text-blue-600 mr-2" />
                                {doctor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Specialized Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Procedures Monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
