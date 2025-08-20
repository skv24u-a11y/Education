import React, { useState, useEffect } from 'react';
import Dashboard from '../components/StudentPortal/Dashboard';

const StudentPortal: React.FC = () => {
  // Set page title and description
  React.useEffect(() => {
    document.title = 'Student Portal - Matipa Academy | Your Nursing Education Dashboard';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Access your Matipa Academy student portal. Manage assignments, view grades, attend virtual classes, track progress, and connect with fellow nursing students.');
    }
  }, []);

  return <Dashboard />;
};

export default StudentPortal;