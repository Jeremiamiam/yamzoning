'use client';

import { useState, useEffect } from 'react';
import { CategoryPageA } from './variants/PageA';
import { CategoryPageB } from './variants/PageB';

export default function TwoWheelsCategory() {
  const [isVersionA, setIsVersionA] = useState(true);

  useEffect(() => {
    // Récupérer la préférence de version depuis le localStorage
    const storedVersion = localStorage.getItem('categoryPageVersion');
    if (storedVersion) {
      setIsVersionA(storedVersion === 'A');
    }
  }, []);

  const handleVersionToggle = () => {
    const newVersion = !isVersionA;
    setIsVersionA(newVersion);
    localStorage.setItem('categoryPageVersion', newVersion ? 'A' : 'B');
  };

  const SelectedVersion = isVersionA ? CategoryPageA : CategoryPageB;

  return (
    <SelectedVersion 
      showToggleButton={true} 
      onToggle={handleVersionToggle}
    />
  );
} 