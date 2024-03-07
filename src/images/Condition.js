import React from "react";

const Condition = ({ bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={320}
      height={216}
      fill="none"
    >
      <path
        fill={bg}
        d="M156.643 1.027a6 6 0 0 1 6.714 0l154 102c3.524 2.379 3.524 7.567 0 9.946l-154 102a6.001 6.001 0 0 1-6.714 0l-154-102c-3.524-2.379-3.524-7.567 0-9.946l154-102Z"
      />
    </svg>
  );
};

export default Condition;
