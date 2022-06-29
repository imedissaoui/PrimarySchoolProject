import './GestionEnseignant.css';
import React , { useState ,useEffect} from 'react';

import data from './data3.json';
import { nanoid } from 'nanoid';
import {useHistory,BrowserRouter as Router,Link} from 'react-router-dom';
import{IoArrowBackSharp} from 'react-icons/io5';
import{AiFillDelete} from 'react-icons/ai';
import{AiFillEdit} from 'react-icons/ai';
import Axios from 'axios';







const GestionEnseignant = () => {
    
   
    const [isAdding,setIsAdding] = useState(true);
  



    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [genre, setGenre] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [contacts, setContacts] = useState([]);
 
   


    let History=useHistory();
   /* const AddReset =(event)=>{
        event.preventDefault();
        Axios.post("http://localhost:3001/gestion", {
        password:password,
        genre:genre,
        login:login,
        nom:nom,
        prenom:prenom,
           
    }).then(()=> {
        console.log("succes")
    });
    };*/

    useEffect(()=>{
        Axios.get("http://localhost:3001/data")
          .then((res) =>{       
              console.log(res);
              setContacts(res.data)
          });
          
      },[])
      
    const handleAddFormChangeAjouter = (event) => {
        
        event.preventDefault();
        const newContact = {
            id: nanoid(),
            password:password,
            genre:genre,
            login:login,
            nom:nom,
            prenom:prenom,
        };
        Axios.post("http://localhost:3001/gestion", {
            password:password,
            genre:genre,
            login:login,
            nom:nom,
            prenom:prenom,
               
        }).then(()=> {
            console.log("succes")
        });
        
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        setIsAdding(false);
        setContacts(newContacts);
        

        
    };
    
  /*  const RemoveEns =(id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`);
    }
*/
    
    const handleDeleteClick = (id) => {
        
     
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === id);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
        Axios.delete(`http://localhost:3001/delete/${id}`);
      };
      

     

    return (

        <Router>
        <div className="page1">
        <div className="header">
            <Link
            className="btn504"
            to="/services/3"
            >
            <IoArrowBackSharp
            color="#153f65"
            size="50px"
            />
            </Link>
            <h1 className="soustitre">التصرف في المدرسين‎</h1>
        </div>
        
        <div className="table-container">
            <table className="table1">
                <thead>
                    <tr>
                      
                        <th >كلمة السر</th>
                        <th>الجنس</th>
                        <th>اسم المستخدم</th>  
                        <th>اللقب</th>
                        <th>الإسم </th> 
                        <th>تحديث</th>  
                    </tr>
                </thead>
            
           
            <tbody>
            {  contacts.map((contact) => (
                <tr>
                   
                
                <td>{contact.mdp}</td>
                <td>{contact.genre}</td>
                <td>{contact.login}</td>
                <td>{contact.nom}</td>
                <td>{contact.prenom}</td>
                <td>
                    <button type="button" className="btn"
                     onClick={() => handleDeleteClick(contact.id_enseignant)}>مسح</button>
                </td>
         
         
         </tr>

            ))}
            
            
            </tbody>
            </table>
            
            <form className="add1" onSubmit={handleAddFormChangeAjouter}  method="POST" action="/data" >
                    <input  type="text" name="password" required="required" 
                    placeholder="   أدخل  البريد الالكتروني" 
                    onChange={(event)=>{setPassword(event.target.value)}} />

                    <input type="text" name="genre" required="required" 
                    placeholder="           تخصيص مادة" 
                    onChange={(event)=>{setGenre(event.target.value)}} />

                    <input type="text" name="username" required="required" 
                    placeholder="                 أدخل الفصل"  
                    onChange={(event)=>{setLogin(event.target.value)}} />   

                    <input type="text" name="name" required="required"
                     placeholder="               أدخل  اللقب " 
                     onChange={(event)=>{setNom(event.target.value)}}  />

                     <input type="text" name="lastName" required="required"
                     placeholder="            أدخل الاسم  " 
                     onChange={(event)=>{setPrenom(event.target.value)}}  />   

                    <button className="btn101 btn "  type="ajouter" onClick={(event)=>handleAddFormChangeAjouter(event)}  >إضافة</button>
            </form>

            
            </div>  
            </div>
            </Router>
        
    );
}
 
export default GestionEnseignant;