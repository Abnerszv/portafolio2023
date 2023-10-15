import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#346e94] border-b border-[#346e94]" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#346e94] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton