import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    usercard: {
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop:'5%',
        border:'1px solid #005f97',
        borderRadius:15,
        boxShadow: '0px 0 10px #4fb9ea',
        maxWidth:'500px',
        transition:'transform 0.2s ease-out',
        '&:hover': {
            transform:'scale(1.01)',

         },

    },
    usercarddetails:{
        display:'flex',
        alignItems:'center',
        margin:20,
    },
    detailstitle:{
        marginLeft:20,
        color:'#005f97',
        fontWeight:680,
        fontFamily:'Epilogue, sans-serif',
        '&:hover':{
            color:'#4fb9ea',
            cursor:'pointer',
        }
    },
    usercardaddress:{
        display:'flex',
        margin:20,
        alignItems:'center',
        '&:hover': {
            cursor:'pointer',
            '& p':{
                color:'#4fb9ea',
            },
         },
    },
    addressdetails:{
        marginLeft:20,
        color:'#005f97',
        fontWeight:680,
        fontFamily:'Epilogue, sans-serif',

    },
    icon:{
        color:"#4fb9ea",
        '&:hover': {
            color:"#005f97",
        }

    }
  });

const Usercard=({name,email,username,website,phone,street,suite,city,zipcode})=> {
    const classes= useStyles();
    return (
        <div className={classes.usercard}>
            <div className={classes.usercarddetails}>
                <AccountCircleIcon className={classes.icon}/>
                <p className={classes.detailstitle}>{name}</p>
            </div>
            <div className={classes.usercarddetails}>
                <MailIcon className={classes.icon}/>
                <p className={classes.detailstitle}>{email}</p>
            </div>
            <div className={classes.usercarddetails}>
                <AssignmentIndIcon className={classes.icon}/>
                <p className={classes.detailstitle}>{username}</p>
            </div>
            <div className={classes.usercarddetails}>
                <LanguageIcon className={classes.icon}/>
                <p className={classes.detailstitle}>{website}</p>
            </div>
            <div className={classes.usercarddetails}>
                <PhoneIcon className={classes.icon}/>
                <p className={classes.detailstitle}>{phone}</p>
            </div>
            
            
            <div className={classes.usercardaddress}>
                <HomeIcon className={classes.icon}/>
                <p className={classes.addressdetails}>{street}</p>
                <p className={classes.addressdetails}>{suite}</p>
                <p className={classes.addressdetails}>{city}</p>
                <p className={classes.addressdetails}>{zipcode}</p>
            </div>
            
        </div>
    )
}

export default Usercard;
