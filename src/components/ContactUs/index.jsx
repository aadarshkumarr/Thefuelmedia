import './index.css';
import Line from '../Line';
import { useState } from 'react';
import { send } from 'emailjs-com';
import newDelhi from '../../assets/NewDelhi.png';

export default () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
        phone: ''
    });

    const [m, setM] = useState('');

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if(toSend.from_name === '' || toSend.reply_to === '') {
            setM("Fill All Fields Correctly!")
        } else {
            send(
            'service_xv8p2mw',
            'template_frsffiy',
            toSend,
            'sFFx6hdcUjwRnimQB'
            )
            .then((response) => {
                setM('Message sent successfully!');
                setToSend({
                    from_name: '',
                    message: '',
                    reply_to: '',
                    phone: ''
                })
            })
            .catch((err) => {
                console.log(err);
                setM('FAILED... Error Occured!');
            });
        }
    };

    return (
        <div id='contact' className='ContactUs'>
            <p className='App__subheading'>Feel free to contact us anytime</p>
            <h1 className='App__heading'>Get in Touch</h1>
            <Line />
            <div className='ContactUs__container'>
                <div className='ContactUs__left'>
                        <div className='Footer__contact'>
                            <div className='Footer__contactHeading'>Email</div>
                            <div className='Footer__contactSubHeading' onClick={()=>{window.open("mailto:thefuelmedia.core@gmail.com")}}>thefuelmedia.core@gmail.com</div>
                        </div>
                        <div className='Footer__contact'>
                            <div className='Footer__contactHeading'>Call Us At</div>
                            <div className='Footer__contactSubHeading' onClick={()=>{window.open("tel:9968571394")}}>+91 99685 71394</div>
                        </div>
                        <img src={newDelhi} alt="newdelhi" className='Map'/>
                </div>
                <div className='ContactUs__right'>
                    <input className='Contactus__name' placeholder='Name*' type="text" name="from_name" value={toSend.from_name} onChange={handleChange}/>
                    <input className='Contactus__email' placeholder='Email*' type="email" name="reply_to" value={toSend.reply_to} onChange={handleChange}/>
                    <input className='Contactus__phone' placeholder='Phone' type="text" name="phone" value={toSend.phone} onChange={handleChange}/>
                    <textarea rows={8} className='Contactus__message' placeholder='Your Message' name="message" value={toSend.message} onChange={handleChange}/>
                    <div className='ContactUs__buttonDiv'><button className='ContactUs__send' onClick={handleClick}>Send Message</button></div>
                    <p style={{textAlign: 'right',marginRight: '18px',color: 'white',marginBlockEnd:'0',marginBlockStart: '0', fontSize: '20px', fontFamily: "'Poppins', sans-serif"}}>{m}</p>
                </div>
            </div>
        </div>
    );
}