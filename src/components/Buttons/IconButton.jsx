import React from "react";

const IconButton = ({ icon: Icon, size = 28, className, handle }) => {
  return (
    <button className={className} onClick={handle}>
      <Icon size={size} />
    </button>
  );
};

export default IconButton;
