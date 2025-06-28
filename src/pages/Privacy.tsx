
import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                <strong>Last updated:</strong> January 2024
              </p>
            </div>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We collect information to provide better healthcare services to our patients:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, address, phone number, email, date of birth</li>
                  <li><strong>Medical Information:</strong> Health records, insurance details, appointment history</li>
                  <li><strong>Website Usage:</strong> Pages visited, time spent, device information</li>
                  <li><strong>Communication:</strong> Messages sent through our contact forms or patient portal</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide medical care and treatment</li>
                  <li>Schedule and manage appointments</li>
                  <li>Process insurance claims and billing</li>
                  <li>Communicate about your care and services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We may share your information with:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Healthcare providers involved in your care</li>
                  <li>Insurance companies for claims processing</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business associates who help us provide services</li>
                </ul>
                <p className="font-semibold">We never sell your personal information to third parties.</p>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Access your personal and medical information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint about our privacy practices</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>We implement comprehensive security measures including:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on privacy and security practices</li>
                  <li>HIPAA-compliant data handling procedures</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>If you have questions about this privacy policy or want to exercise your rights, contact us:</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p><strong>Privacy Officer</strong></p>
                  <p>MediCare Hospital</p>
                  <p>123 Healthcare Ave, Medical District</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: privacy@medicarehospital.com</p>
                </div>
              </div>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                This privacy policy may be updated periodically. We will notify you of any significant changes 
                through our website or by contacting you directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
