
import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Users, Award, Heart, Building2, GraduationCap } from 'lucide-react';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = ['all', 'Medical', 'Nursing', 'Administration', 'Technology', 'Support Services', 'Research'];
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const jobListings = [
    {
      id: 1,
      title: 'Emergency Medicine Physician',
      department: 'Medical',
      type: 'Full-time',
      location: 'Main Hospital',
      salary: '$280,000 - $350,000',
      experience: '3+ years',
      description: 'Board-certified Emergency Medicine physician to join our 24/7 emergency department team.',
      requirements: [
        'MD/DO degree with Emergency Medicine residency',
        'Board certification in Emergency Medicine',
        'Current state medical license',
        'ACLS, PALS, ATLS certifications',
        'Strong communication and leadership skills'
      ],
      benefits: ['Health Insurance', 'Retirement Plan', 'CME Allowance', 'Malpractice Insurance'],
      posted: '2024-01-15',
      urgent: true
    },
    {
      id: 2,
      title: 'Registered Nurse - ICU',
      department: 'Nursing',
      type: 'Full-time',
      location: 'Intensive Care Unit',
      salary: '$75,000 - $95,000',
      experience: '2+ years ICU experience',
      description: 'Dedicated ICU nurse to provide critical care for our most vulnerable patients.',
      requirements: [
        'BSN from accredited nursing program',
        'Current RN license',
        'CCRN certification preferred',
        'Minimum 2 years ICU experience',
        'Strong critical thinking skills'
      ],
      benefits: ['Health Insurance', 'Flexible Scheduling', 'Tuition Reimbursement', 'Professional Development'],
      posted: '2024-01-12',
      urgent: false
    },
    {
      id: 3,
      title: 'Healthcare IT Specialist',
      department: 'Technology',
      type: 'Full-time',
      location: 'IT Department',
      salary: '$85,000 - $110,000',
      experience: '3+ years healthcare IT',
      description: 'Support and maintain electronic health record systems and medical technology.',
      requirements: [
        'Bachelor\'s degree in IT or related field',
        'Experience with Epic or similar EHR systems',
        'Healthcare IT certifications preferred',
        'Strong troubleshooting skills',
        'HIPAA compliance knowledge'
      ],
      benefits: ['Health Insurance', 'Remote Work Options', 'Professional Development', 'Tech Equipment'],
      posted: '2024-01-10',
      urgent: false
    },
    {
      id: 4,
      title: 'Medical Research Coordinator',
      department: 'Research',
      type: 'Full-time',
      location: 'Research Center',
      salary: '$60,000 - $75,000',
      experience: '1-3 years research experience',
      description: 'Coordinate clinical trials and research studies in cardiology and neurology.',
      requirements: [
        'Bachelor\'s degree in life sciences',
        'Research experience preferred',
        'GCP certification',
        'Excellent organizational skills',
        'Attention to detail'
      ],
      benefits: ['Health Insurance', 'Research Opportunities', 'Conference Travel', 'Continuing Education'],
      posted: '2024-01-08',
      urgent: false
    },
    {
      id: 5,
      title: 'Physical Therapist',
      department: 'Support Services',
      type: 'Full-time',
      location: 'Rehabilitation Center',
      salary: '$78,000 - $92,000',
      experience: 'New graduates welcome',
      description: 'Provide rehabilitation services for patients recovering from surgery and injury.',
      requirements: [
        'Doctor of Physical Therapy degree',
        'Current state PT license',
        'CPR certification',
        'Strong interpersonal skills',
        'Commitment to patient care'
      ],
      benefits: ['Health Insurance', 'Mentorship Program', 'Flexible Schedule', 'Student Loan Assistance'],
      posted: '2024-01-05',
      urgent: false
    },
    {
      id: 6,
      title: 'Medical Administrative Assistant',
      department: 'Administration',
      type: 'Part-time',
      location: 'Outpatient Clinic',
      salary: '$18 - $22/hour',
      experience: '1+ year medical office',
      description: 'Support medical staff with scheduling, documentation, and patient communication.',
      requirements: [
        'High school diploma or equivalent',
        'Medical office experience',
        'Proficiency in MS Office',
        'Strong communication skills',
        'Medical terminology knowledge'
      ],
      benefits: ['Health Insurance', 'Flexible Hours', 'Training Provided', 'Career Growth'],
      posted: '2024-01-03',
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Healthcare',
      description: 'Medical, dental, and vision insurance for you and your family'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance-based bonuses'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuing education, certifications, and career advancement opportunities'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling, PTO, and family-friendly policies'
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Healthcare Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Build a rewarding career in healthcare where you can make a difference in patients' lives every day.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title or description..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Job Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Openings</h2>
          <p className="text-gray-600">Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mr-3">{job.title}</h3>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        Urgent
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                </div>
                
                <div className="lg:ml-6 flex-shrink-0">
                  <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-blue-600 font-medium">
                        +{job.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.benefits.map((benefit, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    Posted: {job.posted} • Experience: {job.experience}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
          </div>
        )}

        {/* Application Process */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-blue-100">Join our team and make a difference in healthcare</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Submit Application</h4>
              <p className="text-blue-100 text-sm">Complete our online application with your resume and cover letter</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Interview Process</h4>
              <p className="text-blue-100 text-sm">Phone screening followed by in-person or virtual interviews</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Join Our Team</h4>
              <p className="text-blue-100 text-sm">Complete onboarding and begin your healthcare career with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
