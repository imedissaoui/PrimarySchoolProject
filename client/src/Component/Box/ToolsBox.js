import React , { useState } from 'react';
import  red from './box.module.css';
import data from './boxData.json';
import Box from './box';

import { nanoid } from 'nanoid';

const ToolBox = () => {
    const [contacts, setContacts] = useState(data);
    const[addFormData, setAddFormData] = useState({
        
        URL:''
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

         setAddFormData(newFormData);
    };
    const handleAddFormChangeAjouter = (event) => {

        event.preventDefault();
        const newContact = {
            id: nanoid(),
            URL:addFormData.URL,
            name:addFormData.name,
           
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
      };
    

    return (<scan className={red.backcolor}>
        <div className={red.page}>
        <h1 className={red.soustitre}>صندوق الادوات</h1>
        <div className={red.tablecontainer}>
            <table className={red.table1}>
             
            
           
            <tbody>
            {contacts.map((contact) => (
                <tr id={red.tr}>
                   
             
                <td id={red.td} className={red.zonetxt}> <a target="blank"   href={contact.URL}> {contact.name} </a></td>
               
                
                <td id={red.td} className={red.suprimer}>
                    <button type="button" onClick={() => handleDeleteClick(contact.id) } >مسح</button>
                </td >
         
         
         </tr>

            ))}
            
            
            </tbody>
            <tfoot>
            <Box/>
            </tfoot>
            </table>
            
           
            </div>  
            </div> 
            </scan>
    );
};

export default ToolBox;