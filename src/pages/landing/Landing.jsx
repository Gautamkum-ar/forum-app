import { Navigations } from "../../components/navigations/Navigations";
import { forumData } from "../../data/ForumData";
import "../landing/style.css";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../../components/post/PostCard";
import { useState } from "react";
import { Sort } from "../../components/sort/Sort";

export const Landing = () => {
  const [postData, setPostData] = useState(forumData.posts);
  const handleupvode = (postId) => {
    const findpost = postData.map((post) =>
      post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setPostData(findpost);
  };
  const handledownvode = (postId) => {
    const findpost = postData.map((post) =>
      post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
    );
    setPostData(findpost);
  };

  const handleSorting = () => {
    const sortedData = [...postData].sort((a, b) => a.createdAt - b.createdAt);
    setPostData(sortedData);
  };

  return (
    <div className="landing__container">
      <Navigations />

      <div className="main">
        {postData.map((forum) => {
          return (
            <PostCard
              forum={forum}
              handleupvode={handleupvode}
              handledownvode={handledownvode}
            />
          );
        })}
      </div>
      <Sort handleSorting={handleSorting} />
    </div>
  );
};
