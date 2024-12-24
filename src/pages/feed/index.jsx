import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Feed = () => {
  // States to hold data
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  // Access the 'category' search parameter in the URL
  const [params] = useSearchParams();
  const selected = params.get("category");

  // Fetch videos based on category change
  useEffect(() => {
    // Clear the videos state to trigger loading state
    setVideos(null);

    // Define the URL based on the selected category
    const url = !selected
      ? "/home"
      : selected === "trending"
      ? "/trending"
      : `/search?query=${selected}`;

    // Make the API request
    api
      .get(url, { params: { geo: "UK", lang: "en" } })
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message));
  }, [selected]);

  return (
    <div className="flex">
      <Sidebar />

      <div className="videos">
        {error ? (
          <Error msg={error} />
        ) : !videos ? (
          <Loader />
        ) : (
          videos.map((i, key) => <Card key={key} item={i} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
