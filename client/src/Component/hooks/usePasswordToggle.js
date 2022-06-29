import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';



const usePasswordToggle = () => {
    const [visible, setvisible] = useState(false);
   const icon = <FontAwesomeIcon icon={visible?"eye-slash":"eye"} onClick={()=>{setvisible(visible=>!visible)}}></FontAwesomeIcon>;
   const InputType=visible?"text":"password";
    return ( icon,InputType);
}
 
export default usePasswordToggle;