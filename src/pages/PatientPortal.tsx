
import React, { useState } from 'react';
import { User, Lock, Calendar, FileText, CreditCard, MessageCircle, Download, Eye, Clock, Phone } from 'lucide-react';

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const mockPatientData = {
    name: 'John Doe',
    id: 'P123456',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-06-15',
    address: '123 Main St, City, State 12345',
    emergencyContact: 'Jane Doe - (555) 987-6543'
  };

  const upcomingAppointments = [
    {
      date: '2024-01-20',
      time: '10:00 AM',
      doctor: 'Dr. Michael Chen',
      department: 'Cardiology',
      type: 'Follow-up',
      location: 'Main Building, Floor 3'
    },
    {
      date: '2024-01-25',
      time: '2:30 PM',
      doctor: 'Dr. Sarah Williams',
      department: 'Neurology',
      type: 'Consultation',
      location: 'Neurology Center, Floor 2'
    }
  ];

  const labResults = [
    {
      date: '2024-01-15',
      test: 'Complete Blood Count',
      status: 'Normal',
      doctor: 'Dr. Michael Chen'
    },
    {
      date: '2024-01-10',
      test: 'Lipid Panel',
      status: 'Abnormal - See Notes',
      doctor: 'Dr. Michael Chen'
    },
    {
      date: '2024-01-05',
      test: 'Thyroid Function',
      status: 'Normal',
      doctor: 'Dr. Sarah Williams'
    }
  ];

  const bills = [
    {
      date: '2024-01-15',
      service: 'Cardiology Consultation',
      amount: 250.00,
      status: 'Paid',
      insurance: 'Covered'
    },
    {
      date: '2024-01-10',
      service: 'Laboratory Tests',
      amount: 180.00,
      status: 'Pending',
      insurance: 'Partial'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Patient Portal</h1>
              <p className="text-gray-600 mt-2">Access your medical records and manage appointments</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm block">Forgot Password?</a>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm block">Create New Account</a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Demo Access:</strong> Use any email and password to access the demo portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Patient Portal</h1>
              <p className="text-gray-600">Welcome back, {mockPatientData.name}</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow p-4">
              <ul className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: User },
                  { id: 'appointments', label: 'Appointments', icon: Calendar },
                  { id: 'records', label: 'Medical Records', icon: FileText },
                  { id: 'billing', label: 'Billing', icon: CreditCard },
                  { id: 'messages', label: 'Messages', icon: MessageCircle }
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                          activeTab === item.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Patient Info */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Patient Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="text-gray-900">{mockPatientData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Patient ID</label>
                      <p className="text-gray-900">{mockPatientData.id}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-900">{mockPatientData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Phone</label>
                      <p className="text-gray-900">{mockPatientData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                      <p className="text-gray-900">{mockPatientData.dateOfBirth}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
                      <p className="text-gray-900">{mockPatientData.emergencyContact}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Book Appointment</h3>
                    <button className="text-blue-600 hover:text-blue-700">Schedule Now</button>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">View Records</h3>
                    <button className="text-green-600 hover:text-green-700">Access Files</button>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 text-center">
                    <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Message Doctor</h3>
                    <button className="text-purple-600 hover:text-purple-700">Send Message</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Appointments</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Book New Appointment
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingAppointments.map((apt, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-lg font-semibold text-gray-900">{apt.date}</span>
                            <span className="text-blue-600 font-medium">{apt.time}</span>
                          </div>
                          <p className="text-gray-700 font-medium">{apt.doctor} - {apt.department}</p>
                          <p className="text-gray-600 text-sm">{apt.type} • {apt.location}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">Reschedule</button>
                          <button className="text-red-600 hover:text-red-700 text-sm">Cancel</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Lab Results</h2>
                  <div className="space-y-4">
                    {labResults.map((result, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{result.test}</h3>
                            <p className="text-gray-600 text-sm">{result.date} • {result.doctor}</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              result.status === 'Normal' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {result.status}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 text-gray-600 hover:text-blue-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-blue-600">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Billing & Insurance</h2>
                <div className="space-y-4">
                  {bills.map((bill, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{bill.service}</h3>
                          <p className="text-gray-600 text-sm">{bill.date}</p>
                          <p className="text-gray-600 text-sm">Insurance: {bill.insurance}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">${bill.amount}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            bill.status === 'Paid'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {bill.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Messages</h2>
                <div className="text-center py-12">
                  <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No messages at this time</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Send New Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
