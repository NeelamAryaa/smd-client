import React, { useState } from "react";
import { BASE_URL } from "../config/config";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ScheduleModal({ setScheduledPosts }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    time_field: "",
    date_field: "",

    draft_or_schedule: "schedule",
  });

  // const notify = (msg) => toast(msg);

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = () => {
    axios
      .post(`${BASE_URL}/upcoming-posts/`, formData)
      .then((response) => {
        setScheduledPosts((prev) => [response.data, ...prev]);
        console.log("Schedule post created successfully:", response.data);
        toast.success("Schedule post created successfully!");
        document.getElementById("modalId").classList.add("hidden");
        // Handle success response
      })
      .catch((error) => {
        console.error("Error creating schedule post:", error);
        toast.error("Error creating schedule post!");
        // Handle error response
      });
  };

  return (
    <>
      <Toaster />
      <div
        id="modalId"
        className="fixed z-10 inset-0 overflow-y-hidden mt-16 hidden"
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            {/*  */}

            <div class="relative px-4 py-10 bg-white  shadow rounded-3xl sm:p-4">
              <div class="max-w-md mx-auto">
                <div class="flex items-center space-x-5">
                  <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    S
                  </div>
                  <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 class="leading-relaxed">Schedule A Post</h2>
                    <p class="text-sm text-gray-500 font-normal leading-relaxed">
                      Make you task easy, schedule a post and post it in future.
                    </p>
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
                    <div class="flex items-center space-x-8">
                      <div class="flex flex-col">
                        <label class="leading-loose">Date</label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={onChangeHandle}
                            name="date_field"
                            type="date"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="25/02/2020"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Time</label>
                        <div class="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            onChange={onChangeHandle}
                            name="time_field"
                            type="time"
                            class="px-4  py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="26/02/2020"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <label class="leading-loose">Content</label>
                      <textarea
                        onChange={onChangeHandle}
                        name="content"
                        // type="text"
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
                          .getElementById("modalId")
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
                      Schedule
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
