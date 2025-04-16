'use client';

import { useState } from 'react';
import { ProductPageA } from './variants/PageA';
import { ProductPageB } from './variants/PageB';

export default function ProductPage() {
  const [showVariantB, setShowVariantB] = useState(false);

  const handleToggle = () => {
    setShowVariantB(!showVariantB);
  };

  return showVariantB ? (
    <ProductPageB showToggleButton={true} onToggle={handleToggle} />
  ) : (
    <ProductPageA showToggleButton={true} onToggle={handleToggle} />
  );
} 