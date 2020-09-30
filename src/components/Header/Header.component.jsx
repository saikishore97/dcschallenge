import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
        margin:10,
    },
    h1:{
        marginLeft:20,
        color:'#005f97',
        fontFamily:'Epilogue, sans-serif',
        fontSize:40,
        marginBottom:14,
    }
  });

const Header=()=> {
    const classes= useStyles();
    return (
        <div className={classes.header}>
            <img src="https://dcsbusiness.com/wp-content/uploads/2018/12/DCS_Site_Logo-Primary.png" alt="DCS-LOGO"/>
            <h1 className={classes.h1}>Challenge</h1>
        </div>
    )
}

export default Header;
