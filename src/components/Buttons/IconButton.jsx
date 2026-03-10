import React from "react";

const IconButton = ({ icon: Icon, size = 28, className }) => {
  return (
    <button className={className}>
      <Icon size={size} />
    </button>
  );
};

export default IconButton;
