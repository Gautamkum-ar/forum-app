import { FaBookmark, FaHome, FaRocket, FaUser } from "react-icons/fa";

import "../navigations/style.css";

export const Navigations = () => {
  return (
    <div className="navigation__container">
      <div className="links">
        <p>
          <FaHome />
          Home
        </p>
        <p>
          <FaRocket />
          Explore
        </p>
        <p>
          <FaBookmark />
          Bookmarks
        </p>
        <p>
          <FaUser />
          Profile
        </p>
      </div>
    </div>
  );
};
