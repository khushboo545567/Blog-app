import React from "react";
import CommentCard from "../components/CommentCard";

const BlogDetails = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}

        <div className="flex gap-5 mb-4">
          <img
            src="https://i.pinimg.com/564x/b5/9d/9e/b59d9e9449cb29c2a24fc41643405ab1.jpg"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <p className="text-black dark:text-white">username</p>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Blog Heading Goes Here
          </h1>

          {/* Meta + Actions */}
          <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-600 dark:text-gray-400">
            <button className="flex items-center gap-1 hover:text-blue-500">
              <i className="ri-thumb-up-line"></i>
              <span>20</span>
            </button>

            <button className="flex items-center gap-1 hover:text-green-500">
              <i className="ri-chat-3-line"></i>
              <span>2</span>
            </button>

            <button className="hover:text-yellow-500">
              <i className="ri-bookmark-line"></i>
            </button>
            <span>5 days ago</span>

            <button
              className="ml-auto px-4 py-1 rounded-full 
              bg-black cursor-pointer text-white dark:bg-white dark:text-black"
            >
              Follow
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mt-6">
          <p className="pb-5 text-black dark:text-white">
            This is the theory part of the blog. The content can include images,
            headings, lists, and formatted text. The typography styles ensure
            consistency across all posts.
          </p>

          <img
            src="https://i.pinimg.com/564x/b5/9d/9e/b59d9e9449cb29c2a24fc41643405ab1.jpg"
            alt="blog"
            className="h-[400px] w-[600px] flex items-center"
          />

          <p className="pt-5 text-black dark:text-white">
            More content continues here. This layout keeps the UI clean even if
            different users write in different styles.
          </p>
        </div>

        {/* Comment Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Add a Comment
          </h3>

          <form className="flex gap-3 border-b border-gray-200 dark:border-gray-700 pb-8 mb-10">
            <input
              type="text"
              placeholder="Write your comment..."
              className="flex-1 px-4 py-2 rounded-lg
              bg-gray-100 dark:bg-gray-800
              text-gray-800 dark:text-gray-200
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-lg 
              bg-black text-white dark:bg-white dark:text-black"
            >
              Post
            </button>
          </form>
          <div className="mb-10">
            <ul>
              <li>
                <CommentCard />
              </li>
              <li>
                <CommentCard />
              </li>
              <li>
                <CommentCard />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
