import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/';
import logo from '../../assets/logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Tabs, Tab, Button } from '@material-ui/core'
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
        fontSize: "1rem"
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
    //Tabs
    const handleValueChange = (e, newValue) => {
        setValue(newValue)
    }
    const classes = useStyles();

    
    return (
        <>
        
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
               <img src={logo} alt="logo-img" className={classes.logo}/>
               <Tabs value={value} onChange={handleValueChange} className={classes.tabsContainer}
               indicatorColor="secondary">
                        <Tab className={classes.tab} label="Home" to="/home" component={Link}/>
                        <Tab className={classes.tab} label="Services" to="/services" component={Link}/>
                        <Tab className={classes.tab} label="The revolution" to="/revolution" component={Link}/>
                        <Tab className={classes.tab} label="About us" to="/about" component={Link}/>
                        <Tab className={classes.tab} label="Contact us" to="/contact" component={Link}/>
               </Tabs>
               <Button className={classes.button} variant="contained" color="secondary">Free estimate</Button>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
       
        </>
    )
}
