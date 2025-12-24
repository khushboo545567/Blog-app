import React from "react";

const AssignPermission = () => {
  const user = {
    username: "Khushboo",
    role: "Admin",
    permissions: [
      { _id: "1", action: "create", resource: "post" },
      { _id: "2", action: "edit", resource: "post" },
      { _id: "3", action: "delete", resource: "comment" },
    ],
  };

  return <div>kjj</div>;
};

export default AssignPermission;
