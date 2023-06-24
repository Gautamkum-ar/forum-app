import { FaBookmark, FaHome, FaRocket, FaUser } from "react-icons/fa";

import "../navigations/style.css";
import { Link } from "react-router-dom";
import { forumData } from "../../data/ForumData";

export const Navigations = () => {
  const { username, name, picUrl } = forumData;
  return (
    <div className="navigation__container">
      <div className="links">
        <p>
          <Link to="/">
            {" "}
            <FaHome />
            Home
          </Link>
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
      <div className="user__profile">
        <img src={picUrl} alt={name} />
        <p>
          {name} <span>@{username}</span>
        </p>
      </div>
    </div>
  );
};
