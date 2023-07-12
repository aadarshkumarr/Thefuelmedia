import Line from '../Line';
import './index.css';
import logo from '../../assets/logo.png';


export default () => {
    return (
        <div id='about' className='About'>
            <p className='App__subheading'>Get To Know Us</p>
            <h1 className='App__heading'>About Us</h1>
            <Line />
            <div className='About__content'>
                <div className='About__content-left'>
                    <p className='About__content-p'>The Fuel Media is the epitome of a 360° digital marketing agency that beholds the sustained notion to diversify brands across the globe. Our team of young and well-experienced enthusiasts will support you in achieving all your digital marketing goals and stimulate the growth of your business ventures by strategizing, planning, and implementing to maximize the desired outcomes of your social media handles.</p>
                    <p className='About__content-p'>We envision altering the stereotypical perspectives often linked to unconventional and new professions emerging in the modern era which promote online marketing through an effective digital performance strategy. Our best interest and focus lies in the service of our clients and forming healthy corporate relations to deliver worthy outcomes that are fruitful for everyone.</p>
                </div>
                <div className='About__content-right'>
                    <img className="About__logo" src={logo} alt="logo" />
                </div>
            </div>
        </div>
    );
}