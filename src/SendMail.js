import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };

    return (
        <div className='sendMail'>
            <div className='sendMailHeader'>
                <h3>New Message</h3>
                <IconButton onClick={()=> dispatch(closeSendMessage())}><CloseIcon className='sendMailClose' /></IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' type='email' placeholder="to" {...register("to", { required: true })} />
                {errors.to && <p className='sendMailError'>To is required</p>}
                <input name='subject' type='text' placeholder='subject' {...register('subject', { required: true })} />
                {errors.subject && alert("Subject of the mail Required.")}
                <input name='message' type='text' placeholder='message' className='sendMailMessages' {...register('message', { required: true })} />
                {errors.message && <p className='sendMailError'>Trying to send without mail body.</p>}

                <div className='sendMailOptions'>
                    <Button className='sendMailSend' variant='contained' color='primary' type='submit'>Send Mail</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
