/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SinPage from './components/SinPage';
import RemediaPage from './components/RemediaPage';
import NoiseTransition from './components/NoiseTransition';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'sin' | 'remedia'>('sin');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (target: 'sin' | 'remedia') => {
    setIsTransitioning(true);
    
    // Play noise effect for a short duration, then switch page
    setTimeout(() => {
      setCurrentPage(target);
      
      // End noise effect shortly after page switch
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 400);
  };

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        <NoiseTransition isVisible={isTransitioning} />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentPage === 'sin' ? (
          <SinPage key="sin" onNavigate={() => handleNavigate('remedia')} />
        ) : (
          <RemediaPage key="remedia" onNavigate={() => handleNavigate('sin')} />
        )}
      </AnimatePresence>
    </div>
  );
}

