import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize="large" />} className='sidebarCompose' onClick={()=> dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarBorderIcon} title="Starred" number={21} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={15} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={111} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={30} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" />
            <div className='sidebarFooter'>
                <div className='sidebarFooterIcons'>
                    <IconButton> <PersonIcon /> </IconButton>
                    <IconButton> <DuoIcon /> </IconButton>
                    <IconButton> <PhoneIcon /> </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
