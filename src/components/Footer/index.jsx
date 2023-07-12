import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export default () => {
    return (
        <div className='Footer__bottom'>
            <div className='Footer__socials'>
            <a
                href='https://www.facebook.com/people/The-Fuel-Media/100086286815578/?mibextid=ZbWKwL'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
            >
                <FontAwesomeIcon icon={faFacebook} className='Footer__icon' />
            </a>
            <a
                href='https://www.linkedin.com/company/the-fuel-media/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'
            >
                <FontAwesomeIcon icon={faLinkedin} className='Footer__icon' />
            </a>
            <a
                href='https://www.instagram.com/thefuelmedia/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
            >
                <FontAwesomeIcon icon={faInstagram} className='Footer__icon' />
            </a>
            </div>
            © 2022 The Fuel Media, All Rights Reserved
        </div>
    );
}