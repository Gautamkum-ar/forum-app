import { useNavigate, useParams } from "react-router-dom";
import { Navigations } from "../../components/navigations/Navigations";
import { PostCard } from "../../components/post/PostCard";
import "../comment/style.css";
import { forumData } from "../../data/ForumData";
import { FaComment, FaHeart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";

export const Comment = () => {
  const [postData, setPostData] = useState({});
  const { postId } = useParams();

  const filterPost = forumData.posts.find(
    (post) => post.postId.toString() === postId.toString()
  );
  const handleupvode = (postId) => {
    const findpost = { ...filterPost, upvotes: filterPost.upvotes + 1 };

    setPostData(findpost);
  };
  const handledownvode = (postId) => {
    const findpost = { ...filterPost, upvotes: filterPost.upvotes - 1 };
    setPostData(findpost);
  };
  return (
    <div className="comment__container">
      <Navigations />
      <div className="comment__main">
        <PostCard
          forum={filterPost}
          handledownvode={handledownvode}
          handleupvode={handleupvode}
        />

        <div className="comment">
          {filterPost.comments.map((comm) => {
            const {
              commentId,
              name,
              username,
              picUrl,
              likes,
              comment,
              createdAt,
            } = comm;
            return (
              <div key={commentId} className="comment__card">
                <section className="user__profile">
                  <img src={picUrl} alt="" />
                  <p>
                    {name} <span>@{username}</span>
                  </p>
                </section>
                <div className="comment__content">
                  <p>{comment}</p>
                </div>
                <div className="icons">
                  <FaHeart />
                  <FaComment />
                  <FaShareAlt />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
