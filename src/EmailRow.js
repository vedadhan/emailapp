import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { selectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description, 
            time
        }));
        history.push("/mail");
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRowOptions'>
                <Checkbox />
                <IconButton><StarBorderIcon /></IconButton>
                <IconButton><LabelImportantIcon /></IconButton>
            </div>
            <div className='emailRowTitle'><h3>{title}</h3> </div>
            <div className='emailRowMessage'><h4>{subject}{" "}<span className='emailRowDescription'>-{" "}{description}</span></h4></div>
            <div className='emailRowTime'><p>{time}</p></div>
        </div>
    )
}

export default EmailRow;
