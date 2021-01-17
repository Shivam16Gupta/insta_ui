import {React,useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NearMeIcon from '@material-ui/icons/NearMe';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import classes from '../assets/css/Post.module.css';
import postData from '../Data/Posts.json';



const Post=()=> {

  const [data,setData] = useState([]);

  useEffect(()=>{
    setData(postData);

  },[]);



  return (
    <div className={classes.container}>
      {data.map((posts,key)=>{

        return(

          <div className={classes.card}>
              <div className={classes.header}>
                <Avatar className={classes.avatar}>
                <img className={classes.responsive} src={posts.profile_url} alt=''/>
                </Avatar>
                <div className={classes.htext}>
                <div>
                  {posts.profile_name}
                </div>
                <div>
                  {posts.description}
                </div>
                </div>
                <IconButton>
                  <MoreHorizIcon/>
                </IconButton>
              </div>
              <div>
                <img className={classes.responsive} src={posts.image_url} alt=''/>
              </div>
              <div className={classes.icons}>
                <IconButton>
                  <FavoriteIcon/>
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon/>
                </IconButton>
                <IconButton>
                  <NearMeIcon/>
                </IconButton>
                <IconButton className={classes.icon}>
                  <BookmarkBorderIcon/>
                </IconButton>
                </div>
                <div className={classes.comment}>
                  <Avatar className={classes.avatar}>
                  <img className={classes.responsive} src={posts.comments.profile_image_url} alt=''/>
                  </Avatar>
                  <p className={classes.like}>liked by {posts.comments.from} and {posts.likes} others</p>
                </div>
                  <Divider/>
                <div className={classes.base}>
                  <div className={classes.input}><InputBase placeholder='Add a comment...'/></div>
                  <div className={classes.btn}>Post</div>
                </div>
          </div>

        )
      })}
    </div>
  );
}
export default Post;
