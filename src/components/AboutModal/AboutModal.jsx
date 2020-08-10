import React from 'react';
import './AboutModal.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const AboutModal = (props) => {
    return (
        <div className='about-modal'>
            <div className="container">
            <div onClick={props.closeAboutModal} className="cross">&#10060;</div>
                <AccountCircleIcon style={{
                    fontSize: '150px'
                }} />
                <h4>Hello there, I am Shivam and this is the small project that i have made using ReactJs. It is a Task Management Project. It is a very interactive Project and also very simple at the same time. Hope you would like it &#128513; .</h4>
                <h3>Wanna Contact</h3>
                <h5>Email: <span style={{
                    color: 'lightBlue',
                    fontSize: 20
                }}>lazycoderlife@gmail.com</span></h5>


            </div>
        </div>
    )
}

export default AboutModal;
