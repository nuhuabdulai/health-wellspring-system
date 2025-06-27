
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      condition: 'Cardiac Surgery',
      rating: 5,
      comment: 'The cardiac team at MediCare Hospital saved my life. Dr. Chen and his team were exceptional, and the care I received was world-class.',
      date: '2024-01-15'
    },
    {
      name: 'Michael Rodriguez',
      condition: 'Pediatric Care',
      rating: 5,
      comment: 'Outstanding pediatric care for my daughter. The staff made her feel comfortable and the treatment was excellent.',
      date: '2024-01-12'
    },
    {
      name: 'Emily Davis',
      condition: 'Neurology',
      rating: 5,
      comment: 'Professional, caring, and efficient. The neurology department diagnosed my condition quickly and provided excellent treatment.',
      date: '2024-01-08'
    },
    {
      name: 'David Kim',
      condition: 'Emergency Care',
      rating: 5,
      comment: 'Fast response time in the ER. The medical team was professional and caring during a very stressful situation.',
      date: '2024-01-05'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their experiences with our healthcare services and medical team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
              <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
              
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.condition}</p>
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Share your experience with us</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
