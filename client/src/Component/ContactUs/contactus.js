import React from 'react';
import './contactus.css';
import mail from './1.png';
import Fade from 'react-reveal/Fade';

const Contactus = () => {
    return (
        <div className="contact" id="contactus">
        <div >
        <Fade left>
                <img className="imag" src={mail} alt="" />
        </Fade>
        </div>
        <Fade right>

            <div className="cadre1">
            <form action="">
            <label className="send" for="fname"> : البريد الإلكتروني     </label>
            <input type="text" name="firstname" placeholder="                                                                                ..البريد الإلكتروني  " />
            
            <label className="send2" for="lname">   : موضوع</label>
            <input type="text"  name="lastname" placeholder=".. موضوع    "></input>
            
            <label className="send2" for="subject">: الرسالة</label>
            <textarea  name="subject" placeholder="                                                                                         .. اكتب هنا" ></textarea>
            <input type="submit" value="إرسال"></input>
            </form>
               
            </div>
            </Fade>
        </div>
    );
};

export default Contactus;