
import React from "react";

const Logo = ({ className = "", size = "md" }) => {
  let sizeClasses = "h-10 w-auto";
  
  if (size === "sm") {
    sizeClasses = "h-8 w-auto";
  } else if (size === "lg") {
    sizeClasses = "h-12 w-auto";
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d7e479a7-2297-4ced-9bcd-16f0464c5d92.png" 
        alt="PackPal Logo" 
        className={sizeClasses}
      />
      <div className="ml-2 font-bold text-packpal-dark text-xl">PackPal</div>
    </div>
  );
};

export default Logo;
