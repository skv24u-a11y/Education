import React, { useState, useEffect } from 'react';
import Dashboard from '../components/StudentPortal/Dashboard';
import LoadingAnimation from '../components/StudentPortal/LoadingAnimation';

const StudentPortal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return <Dashboard />;
};

export default StudentPortal;