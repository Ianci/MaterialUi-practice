import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/';
import logo from '../../assets/logo.svg';
import {  Link } from 'react-router-dom'
import { Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core'
import { menuOptions } from './menuOptions'
const useStyles = makeStyles(theme => ({
    
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
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
    const [ open, setOpen] = useState(false)
    const [ anchorEl, setAnchorEl] = useState(null)
    //Selected Index
    const [ selectedIndex, setSelectedIndex ] = useState(0)
    //Tabs
    const handleValueChange = (e, newValue) => {
        setValue(newValue)
    }
    const classes = useStyles();

    //Menus
    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }
    const handleClose = e => {
        setAnchorEl(null)
        setOpen(false)
    }

    //Selected function
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false)
        setSelectedIndex(i)
    }
    
    
    return (
        <>
        
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
               <img src={logo} alt="logo-img" className={classes.logo}/>
               <Tabs value={value} onChange={handleValueChange} className={classes.tabsContainer}
               indicatorColor="secondary">
                        <Tab className={classes.tab} label="Home" to="/home" component={Link}/>
                        <Tab className={classes.tab} label="Services" to="/services" component={Link}
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup={anchorEl ? 'true' : undefined}
                        onClick={e=>handleOpen(e)}
                        />
                        <Tab className={classes.tab} label="The revolution" to="/revolution" component={Link}/>
                        <Tab className={classes.tab} label="About us" to="/about" component={Link}/>
                        <Tab className={classes.tab} label="Contact us" to="/contact" component={Link}/>
               </Tabs>
               <Button className={classes.button} variant="contained" color="secondary">Free estimate</Button>
               <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
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
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
       
        </>
    )
}
