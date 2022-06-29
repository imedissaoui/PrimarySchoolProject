import React , { useState } from 'react';
import  './gestionenseignant.css';
import data from './data.json';
import { nanoid } from 'nanoid';

const Gestionenseignant = () => {
    const [contacts, setContacts] = useState(data);
    const[addFormData, setAddFormData] = useState({
        adress:'',
        matiere:'',
        classe:'',
        fullName:''
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
            adress:addFormData.adress,
            matiere:addFormData.matiere,
            classe:addFormData.classe,
            fullName:addFormData.fullName,
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
    

    return (
        <div className="page">
        <h1 className="soustitre">تعيين المدرّسين</h1>
        <div className="table-container">
            <table className="table1">
                <thead>
                    <tr>
                      
                        <th className="email">البريد الإلكتروني</th>
                        <th>المادة</th>
                        <th>صف دراسي</th>  
                        <th>الإسم واللقب</th> 
                        <th>تحديث</th>  
                    </tr>
                </thead>
            
           
            <tbody>
            {contacts.map((contact) => (
                <tr>
                   
                <td className="email1">{contact.adress}</td>
               
                <td>{contact.matiere}</td>
                <td>{contact.classe}</td>
                <td>{contact.fullName}</td>
                <td>
                    <button type="button" onClick={() => handleDeleteClick(contact.id)}>مسح</button>
                </td>
         
         
         </tr>

            ))}
            
            
            </tbody>
            <tfoot>
                <td colSpan={4}>
                    
            <form className="add"  onSubmit={handleAddFormChangeAjouter}>
                    <input  type="text" name="adress" required="required" placeholder="   أدخل عنوان البريد الالكتروني" onChange={handleAddFormChange} />
                    <input type="text" name="matiere" required="required" placeholder="                      تخصيص مادة" onChange={handleAddFormChange}/>
                    <input type="text" name="classe" required="required" placeholder="                            أدخل الفصل"  onChange={handleAddFormChange}/>                                      
                    <input type="text" name="fullName" required="required" placeholder="                         أدخل الاسم" onChange={handleAddFormChange} />             
                    <button className="btn101" type="ajouter">إضافة</button>
            </form>

                </td>
            </tfoot>
            </table>
            
            </div>  
            </div>
    );
};

export default Gestionenseignant;