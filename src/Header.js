import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className='header'>
            <div className='headerLeft'>
                <IconButton >
                    <MenuIcon />
                </IconButton>
                <img src="https://www.caroli.org/wp-content/uploads/2019/04/email-logo.png" alt="" />
            </div>
            <div className='headerMiddle'>
                <SearchIcon />
                <input type='text' placeholder='Find Mail' />
                <ArrowDropDownIcon  className='headerInputIcon' />
            </div>
            <div className='headerRight'>
                <IconButton><HelpOutlineIcon /></IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} className='headerAvatar' />
            </div>
        </div>
    )
}

export default Header;