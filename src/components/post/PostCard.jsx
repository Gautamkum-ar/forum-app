import {
  FaBookmark,
  FaComment,
  FaShareAlt,
  FaSortDown,
  FaSortUp,
  FaThumbsUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { forumData } from "../../data/ForumData";

export const PostCard = ({ forum, handleupvode, handledownvode }) => {
  const navigate = useNavigate();
  const {
    postId,
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = forum;

  return (
    <div className="post__card" key={postId}>
      <section className="vote__bar">
        <FaSortUp onClick={() => handleupvode(postId)} />
        <p>{upvotes}</p>
        <FaSortDown onClick={() => handledownvode(postId)} />
      </section>
      <section className="post__card__main">
        <div className="user__posted">
          <img src={picUrl} alt="" />
          <p className="user__name">
            Posted by <span>@{username}</span>
          </p>
          <span className="created__at">{createdAt.slice(0, 10)}</span>
        </div>
        <div className="post__card__content">
          <h1>{post}</h1>
          <p className="tags">
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </p>
          <p className="content">{postDescription}</p>
          <div className="action__icons">
            <FaComment onClick={() => navigate(`/comment/${postId}`)} />
            <FaShareAlt />
            <FaBookmark className="bookmark" />
          </div>
        </div>
      </section>
    </div>
  );
};
