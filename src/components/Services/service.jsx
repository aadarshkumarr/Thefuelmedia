import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default ({name, desc, isOpen, toggleData, index}) => {
    return (
        <div className="Services__service" onClick={()=>{toggleData(index)}}>
            <p className="Services__name">{name}</p>
            {isOpen && <p className="Services__desc" dangerouslySetInnerHTML={{ __html: desc }}></p>}
            {isOpen ? <FontAwesomeIcon icon={faChevronUp} className='Service__arrow'/> : <FontAwesomeIcon icon={faChevronDown} className='Service__arrow'/>}
        </div>
    );
}