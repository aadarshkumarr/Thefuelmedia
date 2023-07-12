import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
export default ({person}) => {
    return (
        <div className="Person__container">
            <div className="Person">
                <div className='Person__image' style={{backgroundImage: `url(${person.img})`}}>
                    <div className='Person__social'>
                        <FontAwesomeIcon icon={faLinkedin} className="Person_socialIcon" onClick={()=>{window.open(person.linkedin, '_blank')}}/>
                        <FontAwesomeIcon icon={faInstagram} className="Person_socialIcon" onClick={()=>{window.open(person.insta, '_blank')}}/>
                    </div>
                </div>
                <div className='Person__Name'>{person.name}</div>
                <div className='Person__Designation'>{person.designation}</div>
            </div>
        </div>
    );
}