import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosSearch, IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  // Get the searched word from the URL
  const [params] = useSearchParams();
  const query = params.get("search_query");

  // Set up useNavigate hook
  const navigate = useNavigate();

  // When the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the value entered in the input
    const text = e.target[0].value;

    // Redirect to the search results page
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="px-2 py-[17px] sm:px-4 flex justify-between items-center">
      <Link to="/" className="flex gap-[6px]">
        <img
          src="/youtube.png"
          alt="youtube logo"
          className="w-[41px] sm:w-12"
        />

        <h1 className="text-[21px] sm:text-2xl font-mono">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          className="bg-[#0F0F0F] px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-500 rounded-l-[20px]"
          defaultValue={query}
        />

        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition" />
        <MdVideoLibrary className="hover:text-gray-400 transition" />
        <IoIosVideocam className="hover:text-gray-400 transition" />
      </div>
    </header>
  );
};

export default Header;
