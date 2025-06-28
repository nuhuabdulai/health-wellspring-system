
import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowNotice(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }));
    setShowNotice(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...preferences,
      timestamp: Date.now()
    }));
    setShowNotice(false);
    setShowSettings(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }));
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. 
                  <Link to="/privacy" className="text-blue-600 hover:underline ml-1">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
              >
                <Settings className="w-4 h-4 mr-1" />
                Settings
              </button>
              <button
                onClick={handleDeclineAll}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Decline All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Necessary Cookies</p>
                  <p className="text-sm text-gray-600">Required for basic site functionality</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Analytics Cookies</p>
                  <p className="text-sm text-gray-600">Help us improve our website</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Marketing Cookies</p>
                  <p className="text-sm text-gray-600">Used for personalized advertising</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieNotice;
