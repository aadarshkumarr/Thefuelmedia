import Line from '../Line';
import Person from './Person';
import { teamData } from '../../data/team.data';
import './index.css';

export default () => {
    return (
        <div id='team' className='Team'>
            <p className='App__subheading'>Amazing and talented people work here</p>
            <h1 className='App__heading'>Our Team</h1>
            <Line />
            <div className='Team__container'>
                {teamData.a.map(person => (<Person person={person} />))}
            </div>
            <div className='Team__container'>
                {teamData.b.map(person => (<Person person={person} />))}
            </div>
        </div>
    );
};