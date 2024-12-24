import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
  // Create an array with 20 elements
  const arr = new Array(20).fill("selam");

  // Loop through the array and render 20 card elements on the screen
  return arr.map((i, key) => (
    <div key={key} className="animate-pulse">
      <div className="bg-gray-600 h-[220px] md:h-48 mb-4 rounded"></div>

      <div className="flex gap-3 items-center">
        <FaUserCircle className="text-5xl text-gray-600 self-start" />

        <div className="w-full">
          <div className="w-[90%] h-2.5 bg-gray-600 rounded-full" />
          <div className="w-[40%] h-2.5 bg-gray-600 rounded-full my-4 " />

          <div className="flex gap-2 items-center text-gray-600">
            <div className="w-16 h-2 bg-gray-600 rounded-full" />
            *
            <div className="w-16 h-2 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
