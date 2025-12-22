import React from "react";

const ManageRolePage = () => {
  return (
    <div className="h-full bg-white">
      <div className="mb-10">
        <form action="">
          <input type="text" name="role" id="" />
        </form>
      </div>
      <div>
        <ul>
          <li>
            <ManageRolePage />
          </li>
          <li>
            <ManageRolePage />
          </li>
          <li>
            <ManageRolePage />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ManageRolePage;
