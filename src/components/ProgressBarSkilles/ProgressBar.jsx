import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = ({ label, percentage }) => {

    const darkvalue2 = useSelector((store)=>store.darkMode.isDark)

  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (animatedPercentage < percentage) {
        setAnimatedPercentage(prev => Math.min(prev + 1, percentage));
      }
    };

    const intervalId = setInterval(animate, 50); 

    return () => clearInterval(intervalId);
  }, [percentage, animatedPercentage]);

  return (
    <div className="w-full p-2">
      <label className={darkvalue2 ? "block text-white" : "block text-black"}>{label}</label>
      <div className="w-full h-2 bg-gray-200 rounded-full relative">
        <div
          className="h-2 bg-amber-500 rounded-full transition-all duration-1000"
          style={{ width: `${animatedPercentage}%` }}
        ></div>
        <span className="absolute bottom-4 right-0  transform translate-x-1/2 -translate-y-1/2 text-xs h-2  rounded-full">
          {animatedPercentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
