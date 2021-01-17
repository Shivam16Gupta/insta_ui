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
    maxWidth:'600px',
    backgroundColor: theme.palette.background.paper,
    marginTop:'100px',
    boxShadow:'none',
    border: '1px solid #DBDBDB',
    height:'100px',

  },
  align:{

  },
  tabs:{
    display:'flex',
    alignItems:'center',
    marginTop:'25px',

  },
  avatar:{
    marginLeft:'5px',
    cursor:'pointer',
    height:'50px',
    width:'50px',
    
  }
}));

const Stories=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.align}>
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
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar2.jpg" />
          <Avatar className={classes.avatar}alt="Remy Sharp" src="images/avatar3.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar4.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar5.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar6.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar7.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar8.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar1.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar2.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar3.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar4.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar5.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar6.jpg" />
          <Avatar className={classes.avatar} alt="Remy Sharp" src="images/avatar7.jpg" />

        </Tabs>
      </AppBar>
    </div>
  );
}
export default Stories;
