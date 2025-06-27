
import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-900 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-700">Thank you for subscribing to our health newsletter. You'll receive updates on health tips, hospital news, and important health alerts.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-blue-200 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Stay Healthy & Informed</h3>
        <p className="text-blue-100">
          Subscribe to our newsletter for health tips, medical updates, and hospital news delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>

      <p className="text-xs text-blue-200 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
