import image from "../../assets/image.jpg";
import "./Landing.css"
import props from "../../Pages/HomePages";
import {HashLink} from 'react-router-hash-link';
const Landing = () => {
    return (
        <div className="Landing_page">
            <img src={image} className="image1" />
            
                <HashLink smooth to='#services'><button 
            className="buttonScrollDown"
            >
                <i id="iconDown"className="fa fa-arrow-down"style={{color :"#ffffff",zIndex:"1"}}></i></button></HashLink>
        </div>
          
     );
}
export default Landing;