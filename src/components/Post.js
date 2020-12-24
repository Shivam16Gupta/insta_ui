import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NearMeIcon from '@material-ui/icons/NearMe';
import InputBase from '@material-ui/core/InputBase';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Divider from '@material-ui/core/Divider';
import classes from '../assets/css/Post.module.css';
import image from '../Data/images/dishes.jpg';
import postData from '../Data/Posts.json';


const Post=()=> {
  // const [img,setImg]=React.useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      {postData.map((posts)=>{
        
        return(
          <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={image} alt=" "/>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreHorizIcon/>
              </IconButton>
            }
            title={posts.profile_name}
            subheader={posts.description}
          />
          <CardMedia
            component='img'
            className={classes.media}
            src={image}
            title={posts.description}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
             {posts.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color='secondary' />
            </IconButton>
            
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
              <NearMeIcon />
            </IconButton>
            <IconButton aria-label="bookmark" className={classes.book}>
              <BookmarkBorderIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{posts.comments.profile_name}:..{posts.comments.message}</Typography>
            </CardContent>
          </Collapse>
          <Divider/>
          <InputBase
              className={classes.input}
              placeholder="Add a comment..."
              inputProps={{ 'aria-label': 'Add a comment' }}/>
        </Card>
        )
      })}
    </div>
  );
}
export default Post;