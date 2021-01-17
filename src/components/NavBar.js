import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExploreIcon from '@material-ui/icons/Explore';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  appBar:{
    display:'flex',
    background:'#FFFFFF',
    boxShadow:'none',
    borderBottom:'1px solid #DBDBDB',
    height:'7.5vh',
    justifyContent:'space-around',
    top:0,
    position:'fixed',
    width:'100%',
  },
  
  
  title: {
    display: 'none',
    
  },
  search: {
    display:'flex',
    height:'25px',
    marginLeft:'200px',
    border:'1px solid #DBDBDB',
    borderRadius:'3px',
    backgroundColor: '#FAFAFA',
    
  },
  searchIcon: {
   
    height: '100%',
    
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    
    color:'#B5B5B5',
  
  },
  inputRoot: {
    color: '#B5B5B5',
  },
  inputInput: {
    marginLeft:0,
    
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavBar=()=> {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Deku liked your post</MenuItem>
      <Divider/>
      <MenuItem onClick={handleMenuClose}>Saitama liked your post</MenuItem>
      <Divider/>
      <MenuItem onClick={handleMenuClose}>Eren liked your post</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
              
                <HomeIcon />
              
            </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
      <IconButton aria-label="show 4 new posts" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ExploreIcon />
              </Badge>
            </IconButton>
        <p>Explore</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new notifications" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
      
        <Toolbar className={classes.appBar}>
          <Link to='/'>
        <img src={'images/logo.png'} alt='logo'/></Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link to="/">
          <IconButton aria-label="home">
              <Badge  color="secondary">
              
                <HomeIcon />
              
              </Badge>
            </IconButton>
            </Link>
            
            <IconButton aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
                
                
                <MailIcon />
                
                
              </Badge>
            </IconButton>
            
            <IconButton aria-label="show 4 new mails" >
              <Badge badgeContent={4} color="secondary">
                <ExploreIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              edge="end"
              aria-label="show 4 new notifications"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              
            >
              <Badge badgeContent={3} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <Link to="/user">
            <IconButton aria-label="user account">
              <AccountCircle />
            </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default NavBar;