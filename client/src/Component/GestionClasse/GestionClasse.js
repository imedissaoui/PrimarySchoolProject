import "./GestionClasse.css";
import React , { useState,useEffect } from 'react';
import Axios from 'axios';
import data from './data1.json';
import { nanoid } from 'nanoid';
import {useHistory,BrowserRouter as Router,Link} from 'react-router-dom';
import{IoArrowBackSharp} from 'react-icons/io5';
import{AiFillDelete} from 'react-icons/ai';
import{AiFillEdit} from 'react-icons/ai';


const GestionClasse = () => {



      
        const [isAdding,setIsAdding] = useState(true);
     /*   const[addFormData, setAddFormData] = useState({
            Capacite:'',
            niveau:'',
            numClasse:''
        })*/
        const [nom, setNom] = useState("");
        const [niveau, setNiveau] = useState("");
        const [nb, setNb] = useState("");
        const [anneescolaire, setAnneescolaire] = useState("");
        const [contacts, setContacts] = useState([]);
       /* const handleAddFormChange = (event) => {
            event.preventDefault();
        
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;
            const newFormData = { ...addFormData };
            newFormData[fieldName] = fieldValue;
    
             setAddFormData(newFormData);
             setIsAdding(false);
             
        };*/
        let History=useHistory();
       /* const AddReset =(event)=>{
            event.target.getAttribute("name").value="";
    
        }*/
        useEffect(()=>{
            Axios.get("http://localhost:3001/data3")
              .then((res) =>{       
                  console.log(res);
                  setContacts(res.data)
              });
              
          },[])

          /*const handleEditFormChange = (event) => {
            event.preventDefault();
        
            const fieldName = event.target.getAttribute("name");
            const fieldValue = event.target.value;
        
            const newFormData = { ...editFormData };
            newFormData[fieldName] = fieldValue;
        
            setEditFormData(newFormData);
          };*/
        
        const handleAddFormChangeAjouter = (event) => {
            
            event.preventDefault();
            const newContact = {
                id: nanoid(),
                nom:nom,
                niveau:niveau,
                nb:nb,
            };
            Axios.post("http://localhost:3001/gestionclasse", {
            niveau:niveau,
            nom:nom,
            nb:nb,
            anneescolaire:anneescolaire
               
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
            Axios.delete(`http://localhost:3001/deleteclasse/${id}`);
          };


    return ( 
    <Router><div className="classe">

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
            
        </div>
     
        <h1 className="soustitre">التصرف في الاقسام</h1>
        <div className="table-container">
            <table className="table1">
                <thead>
                    <tr>
                        <th>السنة الدراسية</th>
                        <th>طاقة الإستعاب‎</th>
                        <th>المستوى</th>
                        <th>إسم القسم</th>   
                        <th >تحديث</th>  
                    </tr>
                </thead>
            
           
            <tbody>
            {contacts.map((contact) => (
                <tr>
               
                <td>{contact.anneescolaire}</td>
                <td>{contact.niveau}</td>
                <td>{contact.nb}</td>
                <td>{contact.nom}</td>
                <td>
                    <button type="button" className="btn btn99" onClick={() => handleDeleteClick(contact.id_classe)}><AiFillDelete size="30px"/></button>
                    <button type="button" className="btn btn99" onClick={() => handleDeleteClick(contact.id_classe)}><AiFillEdit size="30px"/></button>
         </td>
         
         </tr>

            ))}
            
            
            </tbody>
            </table>
            
            <form className="add2"  onSubmit={handleAddFormChangeAjouter} action='/data3'>
                   <input type="text" name="anneescolaire" required="required" placeholder="      أدخل السنة الدراسية" 
                   onChange={(event)=>{setAnneescolaire(event.target.value)}}/> 

                    <input type="text" name="numClasse" required="required" placeholder="     أدخل  طاقة الإستعاب" 
                    onChange={(event)=>{setNb(event.target.value)}} />  

                    <input type="text" name="Capacite" required="required" placeholder="          أدخل  المستوى " 
                    onChange={(event)=>{setNom(event.target.value)}}/>

                   
                                 

                    <input type="text" name="niveau" required="required" placeholder="           أدخل إسم القسم" 
                    onChange={(event)=>{setNiveau(event.target.value)}}/>
                    
                   

                    <button className="btn101 btn "  type="ajouter" onClick={(event)=>handleAddFormChangeAjouter(event)}>إضافة</button>
            </form>
            </div>  
            </div>
            </Router> );
}

 
export default GestionClasse;
