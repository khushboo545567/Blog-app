import React from "react";
import StatusCard from "../components/StatusCard";

const StatusPage = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-6">
          <img
            src="https://i.pinimg.com/564x/b5/9d/9e/b59d9e9449cb29c2a24fc41643405ab1.jpg"
            alt="profile"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              username
            </h2>

            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>
                <b>30</b> Followers
              </span>
              <span>
                <b>30</b> Following
              </span>
              <span>
                <b>10</b> Posts
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 dark:border-gray-700 my-6"></div>

        {/* Status Feed */}
        <ul className="flex flex-col gap-4">
          <li>
            <StatusCard />
          </li>
          <li>
            <StatusCard />
          </li>
          <li>
            <StatusCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatusPage;
