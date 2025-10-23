import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark dark:bg-black flex flex-col items-center justify-center z-[100] text-light transition-opacity duration-500">
      <div className="w-16 h-16 border-4 border-light border-t-primary rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium tracking-wider">Loading Portfolio...</p>
    </div>
  );
};

export default LoadingScreen;
