import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/';
import logo from '../../assets/logo.svg
'
const useStyles = makeStyles(theme => ({
    
    toolbarMargin: {
        ...theme.mixins.toolbar
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
   

    const classes = useStyles();

    return (
        <>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar>
               
                </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </>
    )
}
