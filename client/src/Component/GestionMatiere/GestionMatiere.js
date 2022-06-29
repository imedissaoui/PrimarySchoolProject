import"./GestionMatiere.css";

import React , { useState,useEffect } from 'react';

import data from './data2.json';
import { nanoid } from 'nanoid';
import {useHistory,BrowserRouter as Router,Link} from 'react-router-dom';
import{IoArrowBackSharp} from 'react-icons/io5';
import{AiFillDelete} from 'react-icons/ai';
import{AiFillEdit} from 'react-icons/ai';
import Axios from 'axios';


const GestionMatiere = () => {


        
        const [isAdding,setIsAdding] = useState(true);
        const [niveau, setNiveau] = useState("");
        const [libelle, setLibelle] = useState("");
        const [contacts, setContacts] = useState([]);
          
       
        let History=useHistory();
        useEffect(()=>{
            Axios.get("http://localhost:3001/data4")
              .then((res) =>{       
                  console.log(res);
                  setContacts(res.data)
              });
              
          },[])
        
        const handleAddFormChangeAjouter = (event) => {
            
            event.preventDefault();
            const newContact = {
                id: nanoid(),
                niveau:niveau,
                libelle:libelle
            };
            Axios.post("http://localhost:3001/gestionmatiere", {
                niveau:niveau,
                libelle:libelle
                   
            }).then(()=> {
                console.log("succes")
            });
            
            
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);

            
    
            
        };
        const handleDeleteClick = (id) => {
            const newContacts = [...contacts];
        
            const index = contacts.findIndex((contact) => contact.id === id);
        
            newContacts.splice(index, 1);
        
            setContacts(newContacts);
            Axios.delete(`http://localhost:3001/deletematiere/${id}`);
          };
    return ( 
    <Router>
        <div className="matiere">

<div className="header">
            <Link
            className="btn504"
            onClick={()=>History.push('/services/3')}
            >
            <IoArrowBackSharp
            color="#153f65"
            size="50px"
            />
            </Link>
            <h1 className="soustitre">التصرف في المواد</h1>
        </div>
        
        <div className="table-container">
            <table className="table1">
                <thead>
                    <tr>
                        <th>المستوى</th>  
                        <th>إسم المادة</th>
                        <th>تحديث</th>  
                    </tr>
                </thead>
            
           
            <tbody>
            {contacts.map((contact) => (
                <tr>
               
                
                <td>{contact.niveau}</td>
                <td>{contact.libelle}</td>
                <td>
                    <button type="button" className="btn btn99" onClick={() => handleDeleteClick(contact.id_matiere)}><AiFillDelete size="30px"/></button>
                    <button type="button" className="btn btn99" onClick={() => handleDeleteClick(contact.id_matiere)}><AiFillEdit size="30px"/></button>
         </td>
         
         </tr>

            ))}
            
            
            </tbody>
            </table>
            
            <form className="add"  onSubmit={handleAddFormChangeAjouter} action='/data4'>
                    <input className="text1" type="text" name="Capacite" required="required" placeholder="      أدخل  المستوى" 
                    onChange={(event)=>{setNiveau(event.target.value)}}/>
                    <input type="text" name="niveau" required="required" placeholder="         إسم المادة   " 
                    onChange={(event)=>{setLibelle(event.target.value)}}/>                                      
                              
                    <button className="btn101 btn "  type="ajouter" onClick={(event)=>handleAddFormChangeAjouter(event)}>إضافة</button>
            </form>
            </div>  
            </div>
            </Router> );



    
}
 
export default GestionMatiere;