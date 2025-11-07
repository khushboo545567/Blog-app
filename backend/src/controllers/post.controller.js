import { Post } from "../models/post.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudnary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

// user and admin can post article
const PostAticle = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { category } = req.params;
  const { title, description } = req.body;

  // post details
  const postObj = { title, description, postedBy: id, category };

  // post on cloudnary
  if (req.file?.path) {
    const postUrl = await uploadOnCloudnary(req.file.path);
    if (postUrl) {
      postObj.postImage = [postUrl];
    }
  }

  // create post
  const post = await Post.create(postObj);

  return res
    .status(200)
    .json(new ApiResponse(200, post, "article posted successfully"));
});

// adimn , editor, own user can edit the post
const editArticle = asyncHandler(async (req, res) => {});

// get post on the following of the user (first find the users follower and then find these authros in teh post createdby and return )
const getPostForFeed = asyncHandler(async (req, res) => {});

// admin can fetch the post by giving the user id to see the users post take the uid from the body and || the user can also view their own posts take the uid form the req.param
const getPostForUser = asyncHandler(async (req, res) => {});

// admin in body uid get, and user can delete the post from param uid get
const deletePost = asyncHandler(async (req, res) => {});

export { PostAticle };
