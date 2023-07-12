import './index.css';
import Line from '../Line';
import ourwork from '../../assets/Ourwork.mp4'
import { useState } from 'react';
import { useEffect } from 'react';

export default () => {

    const [h, setH] = useState(100)

    useEffect(()=>{
        setH(document.getElementById('OurWork__P').offsetHeight)
    }, [])

    return (
        <div id='ourwork' className='Ourwork'>
            <p className='App__subheading'>Showcasing some of our best work</p>
            <h1 className='App__heading'>Our Work</h1>
            <Line />
            <div className='About__content'>
                <div className='About__content-left'>
                    <p className='About__content-p' id='OurWork__P'>The versatile team at The Fuel Media directs upon transforming the lives of potential talents and brands across various industries by supervising their social media imprints and making a convincing digital marketing strategy to boost their online performance. Catering to the needs of our clients, we offer multi-dimensional services under the scope of all digital services. These include strategic talent management,  specialized website development, digital content marketing, digital performance optimization, and even consultancy services to revolutionize the fresh and unconventional career options opening up for young professionals across the world.</p>
                </div>
                <div className='About__content-right'>
                    <video controls={false}
                        autoPlay={true}
                        loop
                        id='ourworkDesktop'
                        muted
                        playsInline
                        src={ourwork}
                        height={`${h}px`}>
                    </video>
                    <video controls={false}
                        autoPlay={true}
                        loop
                        id='ourworkMobile'
                        muted
                        playsInline
                        src={ourwork}
                        width="80%">
                    </video>
                </div>
            </div>
        </div>
    );
}