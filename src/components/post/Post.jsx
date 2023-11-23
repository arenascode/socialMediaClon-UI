import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Comments from "../comments/Comments.jsx";

const Post = ({ post }) => {
  //Temporary
  // const liked = false;

  const [liked, setLiked] = useState(false)
  const [openComments, setOpenComments] = useState(false)

  const handleLiked = () => {
    console.log(liked);
    setLiked(!liked)
  }

  return (
    <div className="post">
      <div className="containerPost">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon onClick={handleLiked} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLiked} />
            )}
            12 likes
          </div>
          <div className="item" onClick={() => setOpenComments(!openComments)}>
            <TextsmsOutlinedIcon />
            Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {openComments && <Comments/>}
      </div>
    </div>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Post;
