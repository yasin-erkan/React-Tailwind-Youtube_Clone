import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../utils/constants";

const Sidebar = () => {
  // Get the 'category' parameter from the URL
  const [params] = useSearchParams();
  const selected = params.get("category");

  return (
    <aside className="sidebar p-1 md:p-4 h-screen overflow-hidden hover:overflow-y-auto transition-all w-8 hover:w-64">
      {categories.map((i, key) => (
        <Link to={i.path == "/" ? "/" : `/?category=${i.path}`} key={key}>
          <div
            className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition"
            style={{
              background:
                (selected === i.path || (i.name === "Home" && !selected)) &&
                "#242424",
            }}
          >
            <span className="max-md:text-2xl">{i.icon}</span>
            <span className="max-md:hidden">{i.name}</span>
          </div>

          {/* Render divider if the category has the 'divider' property */}
          {i.divider && <hr />}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
