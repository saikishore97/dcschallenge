import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    footer:{
        position:'fixed',
        bottom:0,
        marginLeft:'44%',
        alignItems:'center',
        '& p':{
            color:'#005f97',
            cursor:'pointer',
        }
    }
});

const Footer=()=> {
    const classes= useStyles();
    return (
        <div className={classes.footer}>
            <p>Attempted By Sai Kishore</p>
        </div>
    )
}

export default Footer;
