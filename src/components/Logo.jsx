
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
      <div className="flex items-center justify-center rounded-lg bg-packpal-primary p-2">
        <svg
          className={`${sizeClasses} text-white`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.91 8.84L8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.62a1.93 1.93 0 0 0 .97 1.68l3.65 1.89" />
          <path d="m22 17.92-3.37-1.75a3 3 0 0 0-2.83 0l-6.54 3.39a1 1 0 0 1-.91 0l-6.58-3.41a1.93 1.93 0 0 1-.97-1.68v-4.62a1.93 1.93 0 0 1 .97-1.68L5.02 6.42" />
          <path d="M20 5.08 16.5 3.09" />
          <path d="m18.5 17.83-4.17-2.16" />
          <path d="M12.54 12.67 8.88 10.79" />
          <path d="M15.69 10.2 12.02 8.31" />
        </svg>
      </div>
      <div className="ml-2 font-bold text-packpal-dark text-xl">PackPal</div>
    </div>
  );
};

export default Logo;
