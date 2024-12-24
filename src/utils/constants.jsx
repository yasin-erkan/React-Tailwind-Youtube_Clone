import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Home", icon: <AiFillHome />, path: "/" },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment />,
    path: "trending",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    path: "music",
  },
  { name: "Movies", icon: <FiFilm />, path: "movies" },
  { name: "Live", icon: <MdLiveTv />, path: "live" },
  {
    name: "Games",
    icon: <IoGameControllerSharp />,
    path: "games",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    path: "news",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    path: "sports",
  },
  {
    name: "Educational",
    icon: <RiLightbulbLine />,
    path: "education",
  },
  {
    name: "Beauty & Cosmetics",
    icon: <GiEclipse />,
    path: "cosmetics",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu", path: "/" },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
    path: "/",
  },
  { name: "Help", icon: <FiHelpCircle />, type: "menu", path: "/" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
    path: "/",
  },
];
