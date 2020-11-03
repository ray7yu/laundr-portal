import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Dashboard from './Dashboard'
import DataTable from './DataTable'
import {userRows, orderRows, subscriptionRows} from './DummyData'

const drawerWidth = 175;
const barHeight = 75;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "F9F9F9",
    height: '100%',
  },
  appBar: {
    minHeight: barHeight,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#01C9E1'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    borderStyle: 'none',
    width: drawerWidth,
  },
  toolbar: {
    minHeight: barHeight,
  },
  listHead: {
    padding: '5px 15px 15px 15px',
    borderStyle: 'none',
    backgroundColor: '#01C9E1',
    height: barHeight,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  listItem: {
    backgroundColor: theme.palette.background.default,
  },
  listItemIcon: {
    display: 'inline-block',
    minWidth: '45px',
  },
  selected: {
    backgroundColor: 'lightgrey',
  },
  logo: {
    width: '100%',
  },
  list: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: theme.palette.background.default,
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  },
  logout: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.palette.background.default,
  },
  admin: {
    fontSize: '2em',
    marginBottom: '5px',
    marginEnd: '15px',
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  title: {
    display: 'flex',
    flexDirection: 'row-reverse',
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  // const theme = newTheme;
  const [item, setItem] = React.useState(0);
  const handleSelectItem = (index) => {
    setItem(index);
  };
  const renderSwitch = (option) => {
    switch(option) {
      case 0:
        return <Dashboard />;
      case 1:
        return <DataTable option="User Table" type="user" rows={userRows} filler={'username'}/>;
      case 2:
        return <DataTable option="Order Table" type="order" rows={orderRows} filler={'orderNumber'}/>;
      case 3:
        return <DataTable option="Subscription Table" type="subscription" rows={subscriptionRows} filler={'customerName'}/>;
      default:
        return <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. 
        </Typography>
    }
  };
  const chooseIcon = (index) => {
    switch(index) {
      case 0:
        return <AssessmentIcon />
      case 1:
        return <PeopleIcon />
      case 2:
        return <AssignmentIcon />
      case 3:
        return <AccountBoxIcon />
      default:
        return null;
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={true} className={classes.title}>
          {/* <Typography variant="h6" noWrap>
            Portal
          </Typography> */}
          <div className={classes.admin}>
            Portal
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={`${classes.toolbar} ${classes.listHead}`}>
          <img src="/whiteLogo.png" alt="logo" className={classes.logo}/>
        </div>
        <Divider />
        <List className={classes.list}>
          {['Dashboard', 'User Table', 'Order Table', 'Subscription Table'].map((text, index) => (
            <ListItem button key={text} className={`${classes.listItem} 
                                                    ${index === item ? classes.selected : ""}`
                                                  } onClick={() => handleSelectItem(index)}>
              <ListItemIcon className={classes.listItemIcon}>
                {chooseIcon(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem button key={"Logout"} className={classes.logout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"}/>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderSwitch(item)}
      </main>
    </div>
  );
}