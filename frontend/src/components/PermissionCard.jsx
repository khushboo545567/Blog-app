import React from "react";

const PermissionCard = () => {
  return (
    <div className="flex justify-between items-center border border-gray-300 p-3 rounded-md">
      <div className="text-sm">
        <span className="font-medium">Action:</span> <span>Create</span>
        <span className="mx-2">|</span>
        <span className="font-medium">Resource:</span> <span>Post</span>
      </div>

      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
        Delete
      </button>
    </div>
  );
};

export default PermissionCard;
