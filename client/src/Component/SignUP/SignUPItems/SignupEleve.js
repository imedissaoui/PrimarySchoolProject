import "../SignUP.css";
import Axios from 'axios';
import { useState } from "react";
const SignupEleve = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [genre, setGenre] = useState("");
    const [date, setDate] = useState("");
    const [numinscri, setNuminscri] = useState("");
   
    const Add =(event)=>{
        event.preventDefault();
     
      Axios.post("http://localhost:3001/saveelv", {
        
        genre:genre,
        date:date,
        nom:nom,
        prenom:prenom,
        numinscri:numinscri,
           
    }).then(()=> {
        console.log("succes")
        alert("تم التسجيل بنجاح")
    });
}


    

    return ( <div className="cardEleve">
             <div className="FormClass">
        <h1>مرحبا</h1>
        <h3>قم بملء الفراغات للتسجيل</h3>
            <form className="formulaire" onSubmit={Add}>
                    
                        <h1 className="text-center text">تسجيل</h1>
                            <label htmlFor="prenom">الاسم</label>
                            <input type="text" id="prenom" name="prenom"
                             className="form-control" placeholder="اكتب اسمك هنا"
                             onChange={(event)=>{setPrenom(event.target.value)}} />
                        
                        
                            <label htmlFor="nom">اللقب</label>
                            <input type="text" id="nom" name="nom"
                            className="form-control" placeholder="اكتب لقبك هنا" 
                            onChange={(event)=>{setNom(event.target.value)}}/>

                            <label htmlFor="date">تاريخ الميلاد</label>
                            <input type="date" id="date" name="date"
                            className="form-control" placeholder="اكتب تاريخ ميلادك هنا"
                            onChange={(event)=>{setDate(event.target.value)}} />

                            

                            <label htmlFor="password">المعرف الوحيد</label>
                            <input type="text" id="password" name="password"
                            className="form-control" placeholder="كتب المعرف الوحيد‎" 
                            onChange={(event)=>{setNuminscri(event.target.value)}}/>
                           
                            <label htmlFor="gender">الجنس</label>
                            <select name="gender" id="gender" className="form-control"
                            onChange={(event)=>{setGenre(event.target.value)}}>
                                <option value="ذكر" className="option"> 
                                ذكر
                                </option>
                                <option value="انثى" className="option">
                                انثى 
                                </option>
                                
                                
                            </select>

                            <button 
                                type="submit" 
                                className="btn "
                            >
                                تسجيل
                            </button>
                    
            </form>




    </div>

    </div> );
}
 
export default SignupEleve;