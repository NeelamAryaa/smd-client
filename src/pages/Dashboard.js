import React, { useEffect, useState } from "react";
import Card from "../components/card";

import axios from "axios";
import { BASE_URL } from "../config/config";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/post-analytics/`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);

  return (
    <div class="m-4 rounded-lg  mt-20">
      <h2 class="text-2xl my-4 font-semibold">Dashboard</h2>
      <div class="grid grid-cols-1 gap-4 mb-4">
        {!posts.length ? (
          <div>No Post</div>
        ) : (
          posts.map((post, idx) => <Card post={post} />)
        )}
      </div>
    </div>
  );
}
