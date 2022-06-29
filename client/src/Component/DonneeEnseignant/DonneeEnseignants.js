
import { useState } from "react";
import "./DonneeEnseignant.css";
import dataenseignant from "./dataenseignant.json";
import Donnees from "../DonnePersonnelItems/Donnees";
import { nanoid } from "nanoid";
import{AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import usePasswordToggle from "../hooks/usePasswordToggle";
import {BiUserCircle} from'react-icons/bi';
import {AiOutlineUser} from'react-icons/ai';
import {RiLockPasswordFill} from'react-icons/ri';

import image from "./Donne.png";




const DonneeEnseignants = () => {

    const [isModified,setIsModified]=useState(false);
    const [visible,setVisibile] = useState(false);
    const [data,setData]=useState(dataenseignant);
    const [informations,setInformations]=useState({
        id:nanoid(),
        nom:'',
        prenom:'',
        username:'',
        password:''
    });
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [username,setUsername]=useState("");
    const [motdepasse,setMotdepasse]=useState("");
    const [passwordInputType,PasswordIcon]=usePasswordToggle();
    




    return ( 
    /*الإ سم*/
    /*اللقب*/ 
    /*اسم االمستخدم‎*/
    /* كلمة السر‎ */
    
    <div className="page3">
            <div className="cadre2">
                    <div className="picture">
                            <img className="pic " src={image} width="170px" />
                    </div>
                <div className="informations">
                                    <div class="input-group ">
                                    <label htmlFor="nom">الإ سم</label>
                                            <div className="input">
                                            
                                                <input type="text" class="form-control " placeholder="الإ سم" aria-label="الإ سم" aria-describedby="basic-addon1" id="nome" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1"><div className="fa fa-user icon" ></div></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-group ">
                                    <label htmlFor="lastname">اللقب</label>
                                            <div className="input">
                                            
                                                <input type="text" class="form-control " placeholder="اللقب" aria-label="اللقب" aria-describedby="basic-addon1" id="lastname"value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><div className="fa fa-user icon" ></div></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group ">
                                    <label htmlFor="usernam">اسم االمستخدم</label>
                                            <div className="input">
                                            
                                                <input type="text" class="form-control " placeholder="اسم االمستخدم" aria-label="اسم االمستخدم" aria-describedby="basic-addon1" id="usernam" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><div className="fa fa-user icon" ></div>
</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group ">
                                    <label htmlFor="MotPasse">كلمة السر‎</label>
                                            <div className="input">
                                                <input type={passwordInputType} class="form-control " placeholder="كلمة السر‎" aria-label="كلمة السر‎" aria-describedby="basic-addon1" id="MotPasse"value={motdepasse} onChange={(e)=>setMotdepasse(e.target.value)}/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><div className="fa fa-lock icon" ></div></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-center modifier">تغيير</button>
                </div>




            </div>







        </div>
    

     );
}
 
export default DonneeEnseignants;