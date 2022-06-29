import "../SignUP.css"
import Axios from 'axios';
import { useState } from "react";
const SignupEnseignant = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [genre, setGenre] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const[confirmpassword,setConfirmpassword ] = useState("");
    const Add =(event)=>{
        event.preventDefault();
      if (password !== confirmpassword){
          alert("verfier votre mdp")
      }
      else{
      Axios.post("http://localhost:3001/saveens", {
        password:password,
        genre:genre,
        login:login,
        nom:nom,
        prenom:prenom,
        confirmpassword:confirmpassword,
           
    }).then(()=> {
        console.log("succes")
        alert("تم التسجيل بنجاح")
    });
}


    }


    return ( <div className="cardEnseignant">
         <div className="FormClass">
        <h1>مرحبا</h1>
        <h3>قم بملء الفراغات للتسجيل</h3>
            <form  className="formulaire" onSubmit={Add}>
                    
                        <h1 className="text-center text">تسجيل</h1>
                            <label htmlFor="prenom">الاسم</label>
                            <input type="text" id="prenom" name="prenom"
                             className="form-control" placeholder="اكتب اسمك هنا"
                            onChange={(event)=>{setNom(event.target.value)}} />
                        
                        
                            <label htmlFor="nom">اللقب</label>
                            <input type="text" id="username" name="username" 
                            className="form-control" placeholder="اكتب لقبك هنا" 
                            onChange={(event)=>{setPrenom(event.target.value)}}/>

                            <label htmlFor="text">إسم المستخدم</label>
                            <input type="text" id="password" name="password" 
                            className="form-control" placeholder="اكتب إسم المستخدم"
                            onChange={(event)=>{setLogin(event.target.value)}} />

                            <label htmlFor="password"> كلمة االسر</label>
                            <input type="password" id="password" name="password"
                             className="form-control" placeholder="إكتب كلمة السر" 
                            onChange={(event)=>{setPassword(event.target.value)}}/>

                            <label htmlFor="Confirmer">تأكيد كلمة االسر</label>
                            <input type="password" id="Confirmer" name="Confirmer"
                            className="form-control" placeholder="أعد كتابة كلمة السر" 
                            onChange={(event)=>{setConfirmpassword(event.target.value)}}/>

                            <label htmlFor="gender">الجنس</label>
                            <select name="genre" id="gender" className="form-control"
                              onChange={(event)=>{setGenre(event.target.value)}}>
                                <option value="ذكر" className="option"
                             //   onChange={(event)=>{setGenre(event.target.value)}}
                              > 
                                ذكر
                               </option>
                                <option value="انثى" className="option" 
                              //  onChange={(event)=>{setGenre(event.target.value)}}
                                >
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
 
export default SignupEnseignant;