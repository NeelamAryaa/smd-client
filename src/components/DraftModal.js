import React, { useRef, useState } from "react";
import { BASE_URL } from "../config/config";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function DraftModal({ setDraftPosts }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    draft_or_schedule: "draft",
  });

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = () => {
    axios
      .post(`${BASE_URL}/upcoming-posts/`, formData)
      .then((response) => {
        setDraftPosts((prev) => [response.data, ...prev]);
        console.log("Draft post created successfully:", response.data);
        toast.success("Draft post created successfully!");
        document.getElementById("draftModalId").classList.add("hidden");
        // Handle success response
      })
      .catch((error) => {
        console.error("Error creating draft post:", error.response.data);
        toast.error("Draft post created successfully!");
        // Handle error response
      });
  };

  console.log(formData);

  return (
    <>
      <Toaster />
      <div
        id="draftModalId"
        className="fixed z-10 inset-0 overflow-y-hidden mt-16 hidden"
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            {/*  */}

            <div class="relative px-4 py-10 bg-white md:mx-0 shadow rounded-3xl sm:p-4">
              <div class="max-w-md mx-auto">
                <div class="flex items-center space-x-5">
                  <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    D
                  </div>
                  <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 class="leading-relaxed">Draft A Post</h2>
                    <p class="text-sm text-gray-500 font-normal leading-relaxed">
                      Not sure that you will post this, no worries save your
                      idea here.
                    </p>
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div class="flex flex-col">
                      <label class="leading-loose">Title</label>
                      <input
                        onChange={onChangeHandle}
                        name="title"
                        type="text"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Title"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Description</label>
                      <input
                        onChange={onChangeHandle}
                        name="description"
                        type="text"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                    <div class="flex items-center space-x-8"></div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Content</label>
                      <textarea
                        // type="text"
                        onChange={onChangeHandle}
                        name="content"
                        rows="3"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div class="pt-4 flex items-center space-x-4">
                    <button
                      onClick={() =>
                        document
                          .getElementById("draftModalId")
                          .classList.add("hidden")
                      }
                      class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                    >
                      <svg
                        class="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </button>
                    <button
                      onClick={onSubmitHandle}
                      class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Draft A Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
