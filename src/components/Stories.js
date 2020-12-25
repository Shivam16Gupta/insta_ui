import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop:'100px',
    boxShadow:'none',
    border: '1px solid #DBDBDB',
    height:'70px',
  },
  tabs:{
    display:'flex',
    alignItems:'center',
    marginTop:'10px',
    
  },
  avatar:{
    marginLeft:'5px',
    cursor:'pointer',
  }
}));

const Stories=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar position="static" color="default" className={classes.root}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          
          <Avatar alt="Remy Sharp" src="/Data/images/dishes.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar  className={classes.avatar}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
        </Tabs>
      </AppBar>
    </div>
  );
}
export default Stories;