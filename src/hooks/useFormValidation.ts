
import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FieldConfig {
  [key: string]: ValidationRules;
}

export const useFormValidation = (config: FieldConfig) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    const rules = config[name];
    if (!rules) return '';

    if (rules.required && !value.trim()) {
      return 'This field is required';
    }

    if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (rules.phone && value && !/^[\+]?[\d\s\-\(\)]{10,}$/.test(value)) {
      return 'Please enter a valid phone number';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum ${rules.minLength} characters required`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum ${rules.maxLength} characters allowed`;
    }

    return '';
  };

  const handleBlur = (name: string, value: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (name: string, value: string) => {
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (formData: { [key: string]: string }): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(config).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(config).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    return isValid;
  };

  return {
    errors,
    touched,
    handleBlur,
    handleChange,
    validateForm,
    hasError: (name: string) => touched[name] && !!errors[name],
    getError: (name: string) => touched[name] ? errors[name] : ''
  };
};
