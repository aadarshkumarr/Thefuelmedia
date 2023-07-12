import './index.css';
import Line from '../Line';
import Service from './service';

export default ({sub, heading, data, toggleData}) => {
    return (
        <div id='services' className='Services'>
            <p className='App__subheading'>{sub}</p>
            <h1 className='App__heading'>{heading}</h1>
            <Line />
            {data.map((service, index) => (<Service name={service.name} desc={service.desc} isOpen={service.isOpen} toggleData={toggleData} index={index}/>))}
        </div>
    );
}