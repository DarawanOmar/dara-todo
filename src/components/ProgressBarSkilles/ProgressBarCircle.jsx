import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProgressBarCircle = ({ label, percentage }) => {
    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  // SVG circle properties
  const radius = 30; 
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const animate = () => {
      if (animatedPercentage < percentage) {
        setAnimatedPercentage(prev => Math.min(prev + 1, percentage));
      }
    };

    const intervalId = setInterval(animate, 50); // adjust the speed as needed

    return () => clearInterval(intervalId);
  }, [percentage, animatedPercentage]);

  return (
    <div className="w-full p-2 flex flex-col items-center">
      <label className={darkvalue2 ? "mb-4 text-white" : "mb-4 text-black"}>{label}</label>
      <svg width={(radius + strokeWidth) * 2} height={(radius + strokeWidth) * 2}>
        {/* Background Circle */}
        <circle 
          cx={radius + strokeWidth} 
          cy={radius + strokeWidth} 
          r={radius} 
          stroke="#e6e6e6" 
          strokeWidth={strokeWidth} 
          fill="none" 
        />
        {/* Foreground Circle */}
        <circle 
          cx={radius + strokeWidth} 
          cy={radius + strokeWidth} 
          r={radius} 
          stroke="orange" // color
          strokeWidth={strokeWidth} 
          fill="none" 
          strokeLinecap="round" 
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`}
        />
      </svg>
      <span className="mt-2 text-xs">{animatedPercentage}%</span>
    </div>
  );
};

export default ProgressBarCircle;
