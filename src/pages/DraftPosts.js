import React, { useState, useEffect } from "react";
import Card from "../components/card";
import CardWithButton from "../components/cardWithButton";

import DraftModal from "../components/DraftModal";
import { BASE_URL } from "../config/config";
import axios from "axios";

export default function DraftPosts() {
  const [draftPosts, setDraftPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/draft`)
      .then((res) => setDraftPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="m-4  rounded-lg  mt-20">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl my-4 font-semibold">Draft Posts</h2>
        <div>
          <button
            onClick={() =>
              document.getElementById("draftModalId").classList.remove("hidden")
            }
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg
              class="w-6 h-6 mr-1 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Draft
          </button>
          <DraftModal setDraftPosts={setDraftPosts} />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4">
        {!draftPosts.length ? (
          <div>No Draft Post</div>
        ) : (
          draftPosts.map((draftPost, idx) => (
            <CardWithButton post={draftPost} />
          ))
        )}
      </div>
    </div>
  );
}
