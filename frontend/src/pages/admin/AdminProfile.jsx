import React from "react";

const AdminProfile = () => {
  return (
    <div className="h-full bg-white">
      <div className="bg-white rounded-lg p-10 ">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://i.pinimg.com/564x/b5/9d/9e/b59d9e9449cb29c2a24fc41643405ab1.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full border"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-900">
              Username
            </span>
            <span className="text-sm text-gray-600">email@example.com</span>
            <span className="text-xs text-gray-500">Joined on 5 Dec 2024</span>
          </div>
        </div>

        {/* Roles Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-900">Roles</h2>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
              Admin
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
              Editor
            </span>
          </div>
        </div>

        {/* Permissions Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            Permissions
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500">✔</span> Create Post
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500">✔</span> Create Roles
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500">✔</span> Delete Comments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
