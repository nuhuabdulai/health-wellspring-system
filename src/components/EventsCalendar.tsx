
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'health-camp' | 'vaccination' | 'workshop' | 'seminar';
  attendees: number;
  maxAttendees: number;
}

const EventsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'Free Health Screening Camp',
      description: 'Comprehensive health checkups including blood pressure, diabetes, and BMI screening.',
      date: '2024-02-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Hospital Lobby',
      category: 'health-camp',
      attendees: 45,
      maxAttendees: 100
    },
    {
      id: 2,
      title: 'COVID-19 Vaccination Drive',
      description: 'Free COVID-19 booster shots available for all age groups.',
      date: '2024-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Vaccination Center',
      category: 'vaccination',
      attendees: 78,
      maxAttendees: 150
    },
    {
      id: 3,
      title: 'Heart Health Workshop',
      description: 'Learn about cardiovascular health, diet tips, and exercise recommendations.',
      date: '2024-02-25',
      time: '2:00 PM - 4:00 PM',
      location: 'Conference Room A',
      category: 'workshop',
      attendees: 23,
      maxAttendees: 50
    },
    {
      id: 4,
      title: 'Mental Health Awareness Seminar',
      description: 'Understanding mental health, recognizing symptoms, and available treatments.',
      date: '2024-03-05',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Auditorium',
      category: 'seminar',
      attendees: 67,
      maxAttendees: 200
    }
  ];

  const categoryColors = {
    'health-camp': 'bg-green-100 text-green-800 border-green-200',
    'vaccination': 'bg-blue-100 text-blue-800 border-blue-200',
    'workshop': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'seminar': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  const categoryLabels = {
    'health-camp': 'Health Camp',
    'vaccination': 'Vaccination',
    'workshop': 'Workshop',
    'seminar': 'Seminar'
  };

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 3);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Health Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community health programs, workshops, and vaccination drives designed to promote wellness and preventive care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[event.category]}`}>
                        {categoryLabels[event.category]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {event.attendees}/{event.maxAttendees} registered
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.attendees} people registered</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Info Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Categories</h3>
              <div className="space-y-3">
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[key as keyof typeof categoryColors]}`}>
                      {label}
                    </span>
                    <span className="text-sm text-gray-600">
                      {events.filter(e => e.category === key).length} events
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Register for Events</h3>
              <p className="text-blue-100 mb-4 text-sm">
                All events are free and open to the community. Registration helps us prepare adequate resources.
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors w-full">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
