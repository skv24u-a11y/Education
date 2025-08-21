import React from 'react';
import OnboardingFlow from '../components/Onboarding/OnboardingFlow';

const Onboarding: React.FC = () => {
  // Set page title and description
  React.useEffect(() => {
    document.title = 'Apply Now - Matipa College of Nursing | Nursing Program Application';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Apply to Matipa College of Nursing\'s nursing programs. Complete your application for BSN, RN, or other nursing degrees. Start your journey to becoming a healthcare professional in Africa.');
    }
  }, []);

  return <OnboardingFlow />;
};

export default Onboarding;