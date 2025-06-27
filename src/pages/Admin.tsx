
import React, { useState } from 'react';
import { 
  Users, Calendar, FileText, DollarSign, Settings, BarChart3, 
  UserCheck, Building2, Phone, Mail, Plus, Edit, Trash2, 
  Eye, Download, Upload, Filter, Search 
} from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (loginData.username && loginData.password) {
      setIsAuthenticated(true);
    }
  };

  // Mock data for admin dashboard
  const dashboardStats = [
    { label: 'Total Patients', value: '12,847', change: '+5.2%', icon: Users, color: 'blue' },
    { label: 'Appointments Today', value: '142', change: '+12%', icon: Calendar, color: 'green' },
    { label: 'Active Doctors', value: '87', change: '+2', icon: UserCheck, color: 'purple' },
    { label: 'Revenue (Month)', value: '$2.4M', change: '+8.1%', icon: DollarSign, color: 'yellow' }
  ];

  const recentAppointments = [
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', time: '11:30 AM', status: 'Pending' },
    { id: 3, patient: 'Mike Brown', doctor: 'Dr. Williams', time: '2:00 PM', status: 'Confirmed' },
    { id: 4, patient: 'Sarah Davis', doctor: 'Dr. Chen', time: '3:30 PM', status: 'Cancelled' }
  ];

  const doctors = [
    { id: 1, name: 'Dr. Michael Chen', specialty: 'Cardiology', patients: 145, status: 'Active' },
    { id: 2, name: 'Dr. Sarah Johnson', specialty: 'Neurology', patients: 132, status: 'Active' },
    { id: 3, name: 'Dr. James Wilson', specialty: 'Orthopedics', patients: 98, status: 'On Leave' },
    { id: 4, name: 'Dr. Emily Davis', specialty: 'Pediatrics', patients: 167, status: 'Active' }
  ];

  const blogPosts = [
    { id: 1, title: 'Heart Health Tips', author: 'Dr. Chen', date: '2024-01-15', status: 'Published' },
    { id: 2, title: 'Mental Wellness Guide', author: 'Dr. Johnson', date: '2024-01-12', status: 'Draft' },
    { id: 3, title: 'Flu Prevention 2024', author: 'Dr. Smith', date: '2024-01-10', status: 'Published' }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-gray-600 mt-2">Please sign in to access the admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
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

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Demo Access:</strong> Enter any username and password to access the admin demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Hospital Management System</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
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
                  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                  { id: 'appointments', label: 'Appointments', icon: Calendar },
                  { id: 'doctors', label: 'Doctors', icon: UserCheck },
                  { id: 'patients', label: 'Patients', icon: Users },
                  { id: 'billing', label: 'Billing', icon: DollarSign },
                  { id: 'blog', label: 'Blog Posts', icon: FileText },
                  { id: 'settings', label: 'Settings', icon: Settings }
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
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {stat.change} from last month
                            </p>
                          </div>
                          <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Appointments */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Appointments</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentAppointments.map((apt) => (
                        <div key={apt.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900">{apt.patient}</h3>
                            <p className="text-sm text-gray-600">{apt.doctor} • {apt.time}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            apt.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            apt.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'doctors' && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">Doctor Management</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Doctor
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {doctors.map((doctor) => (
                      <div key={doctor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty} • {doctor.patients} patients</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doctor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {doctor.status}
                          </span>
                          <button className="p-2 text-gray-600 hover:text-blue-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">Blog Management</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      New Post
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-600">By {post.author} • {post.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.status}
                          </span>
                          <button className="p-2 text-gray-600 hover:text-blue-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {['appointments', 'patients', 'billing', 'settings'].includes(activeTab) && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Building2 className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
                </h3>
                <p className="text-gray-600">
                  This section would contain the {activeTab} management interface with full CRUD operations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
