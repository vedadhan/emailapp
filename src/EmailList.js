import { Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';


function EmailList() {

    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
            )
        );
    }, []);
    return (
        <div className='emailList'>
            <div className='emailListSettings'>
                <div className='emailListSettingsLeft'>
                    <Checkbox />
                    <IconButton><ArrowDropDownIcon /></IconButton>
                    <IconButton><RedoIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className='emailListSettingsRight'>
                    <IconButton><ChevronLeftIcon /></IconButton>
                    <IconButton><ChevronRightIcon /></IconButton>
                    <IconButton><KeyboardHideIcon /></IconButton>
                    <IconButton><SettingsIcon /></IconButton>
                </div>
            </div>
            <div className='emailListSections'>
                <Section Icon={InboxIcon} title='primary' color='red' selected />
                <Section Icon={PeopleOutlineIcon} title='social' color='#00c000' />
                <Section Icon={LocalOfferIcon} title='promotions' color='blue' />
            </div>
            <div className='emailListList'>
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow title='Twitch' subject='Hey fellow ' description='this is test mail' time='10pm' />
                <EmailRow title='Switch' subject='Hey Team ' description='this is test mail' time='11pm' />
                <EmailRow title='Ankhi' subject='Hey Ankhi ' description='this is test mail' time='1pm' />
            </div>
        </div>
    )
}

export default EmailList;
