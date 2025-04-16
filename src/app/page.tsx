'use client';

import { useState } from 'react';
import { HomePageA } from './variants/PageA';
import { HomePageB } from './variants/PageB';

export default function Home() {
  const [showVariantB, setShowVariantB] = useState(false);

  const handleToggle = () => {
    setShowVariantB(!showVariantB);
  };

  return showVariantB ? (
    <HomePageB showToggleButton={true} onToggle={handleToggle} />
  ) : (
    <HomePageA showToggleButton={true} onToggle={handleToggle} />
  );
}
