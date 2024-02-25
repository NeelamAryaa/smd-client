import React from "react";

export default function Card({ post }) {
  return (
    <>
      <div class="flex justify-between bg-white p-4 rounded-lg shadow-md border-2 mb-3">
        <div class="flex">
          <div class="flex-shrink-0 mr-4">
            <img
              class="h-28 rounded-lg"
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
            />
          </div>

          <div class="flex">
            <div class="">
              <h2 class="text-lg font-semibold capitalize">{post.title}</h2>
              <p class="text-gray-600 capitalize">{post.creator}</p>
            </div>
          </div>
        </div>
        <div class="flex text-xl items-center">
          <div class="flex flex-col items-center mr-8">
            <div class="flex  font-semibold">{post.likes}</div>

            <div class="flex items-center ">
              <svg
                class="h-5 w-5 fill-current text-gray-500 mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 9.7h4a2 2 0 0 1 1.6.9 2 2 0 0 1 .3 1.8l-2.4 7.2c-.3.9-.5 1.4-1.9 1.4-2 0-4.2-.7-6.1-1.3L9 19.3V9.5A32 32 0 0 0 13.2 4c.1-.4.5-.7.9-.9h1.2c.4.1.7.4 1 .7l.2 1.3L15 9.7ZM4.2 10H7v8a2 2 0 1 1-4 0v-6.8c0-.7.5-1.2 1.2-1.2Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-gray-600">Like</span>
            </div>
          </div>
          <div
            class="flex flex-col items-center mr-8
          "
          >
            <div class="flex  font-semibold">{post.dislikes}</div>
            <div class="flex items-center ">
              <svg
                class="h-5 w-5 fill-current text-gray-500 mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 14.3H5a2 2 0 0 1-1.6-.9 2 2 0 0 1-.3-1.8l2.4-7.2C5.8 3.5 6 3 7.4 3c2 0 4.2.7 6.1 1.3l1.4.4v9.8a32 32 0 0 0-4.2 5.5c-.1.4-.5.7-.9.9a1.7 1.7 0 0 1-2.1-.7c-.2-.4-.3-.8-.3-1.3L9 14.3Zm10.8-.3H17V6a2 2 0 1 1 4 0v6.8c0 .7-.5 1.2-1.2 1.2Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-gray-600">Dislike</span>
            </div>
          </div>
          <div class="flex flex-col items-center mr-8">
            <div class="flex font-semibold">{post.shares}</div>
            <div class="flex items-center ">
              <svg
                class="h-5 w-5 fill-current text-gray-500 mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
              </svg>

              <span class="text-gray-600">Share</span>
            </div>
          </div>
          <div class="flex flex-col items-center mr-8">
            <div class="flex font-semibold">{post.comments}</div>
            <div class="flex items-center">
              <svg
                class="h-5 w-5 fill-current text-gray-500 mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h1v2a1 1 0 0 0 1.7.7L9.4 13H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 17.2h.1l2.1-2.2H15a3 3 0 0 0 3-3V8h2c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-1v2a1 1 0 0 1-1.7.7L14.6 18H9a1 1 0 0 1-1-.8Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-gray-600">Comment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
