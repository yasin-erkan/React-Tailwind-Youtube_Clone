import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../../components/error";
import BasicLoader from "../../components/basic-loader";
import Card from "../../components/card";

const Results = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Access the search parameter in the URL
  const [params] = useSearchParams();
  const query = params.get("search_query");

  // Fetch videos matching the search query from the API
  useEffect(() => {
    // Set loading state to true just before making the API request
    setIsLoading(true);

    // Set the parameters to be sent with the request
    const params = { query, token: page > 1 ? token : undefined };

    // Make the API request
    api
      .get("/search", { params })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  // Clear previous results whenever a new search query is entered
  useEffect(() => {
    setData([]);
    setToken(null);
    setPage(1);
  }, [query]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[93vh] overflow-y-auto">
      <h2 className="text-xl mb-5">
        <span className="font-bold me-2">{query}</span>
        <span>results</span>
      </h2>

      {error && <Error msg={error} />}

      <div className="wrapper flex flex-col gap-5 justify-center">
        {data.map((item, key) => (
          <Card key={key} item={item} isRow />
        ))}
      </div>

      {isLoading && <BasicLoader />}

      <div className="flex justify-center my-10">
        {!isLoading && (
          <button
            className="bg-secondary py-2 px-5 rounded-md hover:bg-zinc-800 transition"
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Results;
