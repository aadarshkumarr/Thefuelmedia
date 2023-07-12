import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export default () => {
    return (
      <div className='Socials'>
        <a
            href='https://www.facebook.com/people/The-Fuel-Media/100086286815578/?mibextid=ZbWKwL'
            className='Social__link'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
          <FontAwesomeIcon icon={faFacebook} className='Socials__icon' />
        </a>
        <a
            href='https://www.linkedin.com/company/the-fuel-media/'
            className='Social__link'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'
          >
          <FontAwesomeIcon icon={faLinkedin} className='Socials__icon' />
        </a>
        <a
            href='https://www.instagram.com/thefuelmedia/'
            className='Social__link'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
          <FontAwesomeIcon icon={faInstagram} className='Socials__icon' />
        </a>
      </div>
    );
}