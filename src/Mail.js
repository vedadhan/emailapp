import { IconButton } from '@material-ui/core';
import React from 'react';
import './Mail.css';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
//import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { LabelImportantOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
//import LabelImportantIcon from '@material-ui/icons/LabelImportant';



function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className='mail'>
            <div className='mailTools'>
                <div className='mailToolsLeft'>
                    <IconButton onClick={() => history.push('/')}><ArrowBackIcon /></IconButton>
                    <IconButton><MoveToInboxIcon /></IconButton>
                    <IconButton><ErrorOutlineIcon /></IconButton>
                    <IconButton><DeleteOutlineIcon /></IconButton>
                    <IconButton><MailOutlineIcon /></IconButton>
                    <IconButton><WatchLaterIcon /></IconButton>
                    <IconButton><CheckCircleOutlineIcon /></IconButton>
                    <IconButton><LabelImportantOutlined /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className='mailToolsRight'>
                    <IconButton><UnfoldMoreIcon /></IconButton>
                    <IconButton><PrintIcon /></IconButton>
                    <IconButton><ExitToAppIcon /></IconButton>
                </div>
                </div>
                <div className='mailBody'>
                    <div className='mailBodyHeader'>
                        <h2>{selectedMail?.subject}</h2>
                        <LabelImportantOutlined className='mailImportant' />
                        <p>{selectedMail?.title}</p>
                        <p className='mailTime'>{selectedMail?.time}</p>
                    </div>
                    <div className='mailMessage'>
                        <p>{selectedMail?.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default Mail;