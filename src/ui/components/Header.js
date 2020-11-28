import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import {  Link } from 'react-router-dom'
import { Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { menuOptions } from './menuOptions'
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles(theme => ({
    
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down('md')]: {
           marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')] : {
           marginBottom: "1.25em"
        }
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down('md')]: {
            height: "5em"
        },
        [theme.breakpoints.down('xs')] : {
            height: "4em"
        }
    },
    tabsContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: theme.spacing(3)
    },
    button: {
        borderRadius: '25px',
        marginLeft: "50px",
        marginRight: "20px",
        fontSize: "1rem",
        color: theme.palette.common.blue
    },
    
    menuBackground: {
        background: theme.palette.common.blue,
        color: "#fff"
    },
    menuItems: {
        ...theme.typography.tab,
        opacity: 0.5,
        "&:hover":{
            opacity: 1,

        }
    },
    buttonIcon: {
        padding: 0
    },
    iconContainer: {
        marginLeft: "auto",
        heigth : "60px"
    },
    swipeableMenu: {
        background: theme.palette.common.blue,
        color: "#fff"
    },
    lisItemClass: {
        ...theme.typography.tab,
        color: "white"
    },
    listFreeEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    appBarStyle: {
        zIndex: theme.zIndex.modal + 1,

    }

  }));

//Material Ui AppBar function
function ElevationScroll(props) {
    const { children} = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
     
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export const HeaderPage = () => {
    
    //Tabs local State
    const [value, setValue] = useState(0)
    //Menus localState
    const [ openMenu, setOpenMenu] = useState(false)
    const [ anchorEl, setAnchorEl] = useState(null)
    //Drawer state
    const [ openDrawer, setOpenDrawer] = useState(false)
    //Selected Index
    const [ selectedIndex, setSelectedIndex ] = useState(0)
    //Ios drawer
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    
    //Tabs
    const handleValueChange = (e, newValue) => {
        setValue(newValue)
    }
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    console.log(matches)
    //Menus
    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }
    const handleClose = e => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    //Selected function
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false)
        setSelectedIndex(i)
    }
    
    const tabs = (
        <>
            <Tabs value={value} onChange={handleValueChange} className={classes.tabsContainer}
               indicatorColor="secondary">
                        <Tab className={classes.tab} label="Home" to="/home" component={Link}/>
                        <Tab className={classes.tab} label="Services"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup={anchorEl ? 'true' : undefined}
                        onClick={e=>handleOpen(e)}
                        />
                        <Tab className={classes.tab} label="The revolution" to="/revolution" component={Link}/>
                        <Tab className={classes.tab} label="About us" to="/about" component={Link}/>
                        <Tab className={classes.tab} label="Contact us" to="/contact" component={Link}/>
               </Tabs>
               <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/estimate">Free estimate</Button>
               <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}
               MenuListProps={{onMouseLeave: handleClose}}
               elevation={0}
               classes={{paper: classes.menuBackground}}>
                 {menuOptions.map((option, i) => (
                     <MenuItem 
                     key={option}
                     component={Link} to={option.link} classes={{root: classes.menuItem}}
                     onClick={(e) => {handleMenuItemClick(e, i) ; setValue(1) ; handleClose()}}
                     selected={i === selectedIndex && value === 1}>
                     {option.name}
                     </MenuItem>
                 ))}
               </Menu>
        </>
    )

    const drawer = (
    <> 
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={!iOS} 
    open={openDrawer}
    onOpen={()=> setOpenDrawer(true)}
    onClose={()=> setOpenDrawer(false)}
    classes={{paper: classes.swipeableMenu}}
    >
    <div className={classes.toolbarMargin} />
    <List disablePadding>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/">
            <ListItemText disableTypography className={classes.lisItemClass}>Home</ListItemText>
        </ListItem>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/services">
            <ListItemText disableTypography className={classes.lisItemClass}>Services</ListItemText>
        </ListItem>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/revolution">
            <ListItemText disableTypography className={classes.lisItemClass}>The revolution</ListItemText>
        </ListItem>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/about">
            <ListItemText disableTypography className={classes.lisItemClass}>About Us</ListItemText>
        </ListItem>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/contact">
            <ListItemText disableTypography className={classes.lisItemClass}>Contact Us</ListItemText>
        </ListItem>
        <ListItem onClick={()=> setOpenDrawer(false)} component={Link} to="/estimate" className={classes.listFreeEstimate}>
            <ListItemText disableTypography className={classes.lisItemClass}>Free Estimate</ListItemText>
        </ListItem>
    </List>  
    </SwipeableDrawer>
    <IconButton onClick={()=> setOpenDrawer(!openDrawer)} disableRipple className={classes.iconContainer}>
    <MenuIcon style={{fontSize: "2rem"}}/>
    </IconButton>
    </>
    )
    return (
        <>
        
        <ElevationScroll>
        <AppBar position="fixed" className={classes.appBarStyle}>
            <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple onCLick={() => setValue(0)} classes={{root : classes.buttonIcon}}>
               <img src={logo} alt="logo-img" className={classes.logo}/>
                </Button>
                {matches ? null : tabs}
                {matches ? drawer : null}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
       
        </>
    )
}
