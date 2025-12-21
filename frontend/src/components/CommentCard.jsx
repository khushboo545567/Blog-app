import React from "react";

const CommentCard = () => {
  return (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between text-sm">
        <p className="font-medium text-gray-800 dark:text-gray-200">username</p>
        <p className="text-gray-500 dark:text-gray-400">7 days ago</p>
      </div>

      {/* Comment Text */}
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        This is the comment written by the user.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-6 mt-3 text-gray-600 dark:text-gray-400">
        <button className="flex items-center gap-1 hover:text-blue-500">
          <i className="ri-thumb-up-line"></i>
          <span>30</span>
        </button>

        <button className="flex items-center gap-1 hover:text-green-500">
          <i className="ri-chat-3-line"></i>
          <span>30</span>
        </button>

        <button className="hover:text-purple-500 underline">Reply</button>
      </div>
    </div>
  );
};

export default CommentCard;
