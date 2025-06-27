
import React from 'react';
import { Phone, MapPin, Clock, AlertCircle, Heart, Zap, Car, Shield } from 'lucide-react';

const Emergency = () => {
  const emergencyNumbers = [
    { service: 'Emergency Department', number: '(555) 911-911', available: '24/7' },
    { service: 'Ambulance Service', number: '(555) 911-999', available: '24/7' },
    { service: 'Poison Control', number: '1-800-222-1222', available: '24/7' },
    { service: 'Mental Health Crisis', number: '(555) 123-HELP', available: '24/7' }
  ];

  const whenToCallEmergency = [
    'Chest pain or difficulty breathing',
    'Severe bleeding or trauma',
    'Loss of consciousness',
    'Severe allergic reactions',
    'Signs of stroke (face drooping, arm weakness, speech difficulty)',
    'Poisoning or overdose',
    'Severe burns',
    'High fever with stiff neck'
  ];

  const firstAidTips = [
    {
      title: 'CPR (Cardiopulmonary Resuscitation)',
      steps: [
        'Call 911 immediately',
        'Place hands on center of chest',
        'Push hard and fast at least 100-120 compressions per minute',
        'Allow complete chest recoil between compressions',
        'Continue until emergency services arrive'
      ]
    },
    {
      title: 'Choking',
      steps: [
        'Ask "Are you choking?" and encourage coughing',
        'Stand behind the person and wrap arms around waist',
        'Make a fist and place above navel',
        'Grip fist with other hand and thrust upward and inward',
        'Repeat until object is expelled or person becomes unconscious'
      ]
    },
    {
      title: 'Severe Bleeding',
      steps: [
        'Call 911 if bleeding is severe',
        'Apply direct pressure with clean cloth',
        'Elevate injured area above heart if possible',
        'Apply pressure to pressure points if bleeding continues',
        'Do not remove embedded objects'
      ]
    },
    {
      title: 'Burn Treatment',
      steps: [
        'Remove from heat source immediately',
        'Cool burn with cool (not cold) water for 10-20 minutes',
        'Remove jewelry before swelling occurs',
        'Cover with sterile gauze',
        'Seek immediate medical attention for severe burns'
      ]
    }
  ];

  const nearbyServices = [
    {
      name: 'Main Emergency Department',
      address: '123 Healthcare Ave, Medical District',
      phone: '(555) 911-911',
      distance: '0.5 miles',
      waitTime: '15 minutes'
    },
    {
      name: 'Urgent Care Center',
      address: '456 Medical Blvd, Downtown',
      phone: '(555) 123-4567',
      distance: '1.2 miles',
      waitTime: '30 minutes'
    },
    {
      name: 'Pediatric Emergency',
      address: '789 Children\'s Way, Medical District',
      phone: '(555) 123-KIDS',
      distance: '0.8 miles',
      waitTime: '20 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <AlertCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">FOR LIFE-THREATENING EMERGENCIES, CALL 911 IMMEDIATELY</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Services</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
              24/7 emergency care with rapid response times and expert medical teams ready to help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:555-911-911"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-6 h-6 mr-2" />
                CALL (555) 911-911
              </a>
              <div className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                Available 24/7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contact Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep these numbers handy for different types of medical emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyNumbers.map((contact, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center hover:bg-red-100 transition-colors">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.service}</h3>
                <a
                  href={`tel:${contact.number.replace(/[^\d]/g, '')}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-700 block mb-2"
                >
                  {contact.number}
                </a>
                <p className="text-sm text-gray-600">{contact.available}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* When to Call Emergency */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Call Emergency</h2>
              <p className="text-gray-600 mb-6">
                Call 911 or visit our Emergency Department immediately if you experience any of these symptoms:
              </p>
              <ul className="space-y-3">
                {whenToCallEmergency.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rapid Triage</h4>
                    <p className="text-gray-600 text-sm">Immediate assessment to prioritize care based on severity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Care</h4>
                    <p className="text-gray-600 text-sm">Board-certified emergency physicians and specialized teams.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Equipment</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art medical technology and diagnostic tools.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Car className="w-6 h-6 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ambulance Services</h4>
                    <p className="text-gray-600 text-sm">24/7 ambulance dispatch with paramedic teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Aid Instructions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic First Aid Instructions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important first aid steps that could save a life while waiting for emergency services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {firstAidTips.map((tip, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                <ol className="space-y-2">
                  {tip.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                <p className="text-yellow-700 text-sm">
                  These instructions are for basic first aid only. Always call 911 for serious emergencies. 
                  Consider taking a certified first aid and CPR course for comprehensive training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Emergency Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby Emergency Services</h2>
            <p className="text-gray-600">Find the closest emergency care facility based on your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {nearbyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Car className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.distance} away</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Wait time: {service.waitTime}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={`tel:${service.phone.replace(/[^\d]/g, '')}`}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded text-center hover:bg-red-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
