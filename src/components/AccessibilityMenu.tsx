
import React, { useState } from 'react';
import { Accessibility, Plus, Minus, Eye, EyeOff, Type } from 'lucide-react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = '100%';
    document.body.classList.remove('high-contrast');
  };

  return (
    <>
      {/* High Contrast CSS */}
      <style>{`
        .high-contrast {
          filter: contrast(200%) brightness(150%);
        }
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        .high-contrast a, .high-contrast button {
          color: blue !important;
          text-decoration: underline !important;
        }
      `}</style>

      {/* Accessibility Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Accessibility Options"
        >
          <Accessibility className="w-6 h-6" />
        </button>

        {/* Accessibility Menu */}
        {isOpen && (
          <div className="absolute right-0 top-16 w-72 bg-white rounded-lg shadow-xl border p-6 z-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Accessibility className="w-5 h-5 mr-2" />
              Accessibility Options
            </h3>

            <div className="space-y-4">
              {/* Font Size Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Type className="w-4 h-4 inline mr-2" />
                  Font Size ({fontSize}%)
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                    aria-label="Decrease font size"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center text-sm text-gray-600">
                    Text Size
                  </span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                    aria-label="Increase font size"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div>
                <button
                  onClick={toggleHighContrast}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    highContrast
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center">
                    {highContrast ? (
                      <EyeOff className="w-4 h-4 mr-2" />
                    ) : (
                      <Eye className="w-4 h-4 mr-2" />
                    )}
                    High Contrast
                  </span>
                  <span className="text-sm">
                    {highContrast ? 'ON' : 'OFF'}
                  </span>
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetAccessibility}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reset to Default
              </button>

              {/* Keyboard Navigation Info */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Keyboard Navigation</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Tab: Navigate forward</li>
                  <li>• Shift + Tab: Navigate backward</li>
                  <li>• Enter/Space: Activate buttons</li>
                  <li>• Esc: Close menus/dialogs</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccessibilityMenu;
