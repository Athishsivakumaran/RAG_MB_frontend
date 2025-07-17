import React from 'react';
import drillsenseLogo from '../../assets/drillsense-logo.png';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-start px-8 py-4 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center shadow">
          <img
            src={drillsenseLogo}
            alt="DrillSense Logo"
            className="h-full w-full object-cover object-center"
            style={{ transform: 'scale(1.25)' }}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-extrabold text-2xl text-gray-900 tracking-tight leading-tight">DrillSense</span>
          <span className="text-base text-gray-500 font-medium mt-1">Your company’s knowledge, made searchable.</span>
        </div>
      </div>
    </header>
  );
}; 