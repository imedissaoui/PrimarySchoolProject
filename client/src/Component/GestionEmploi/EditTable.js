import React, { Component,useState } from 'react';
import green from './GestionEmploi.module.css';
import axios from 'axios';
class EditTAble extends Component {
    state = {  
        persons : []
    }
    componentDidMount() {
        axios.get("http://localhost:5000/geta").then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    handlechange = (event,t,d,v) => {
        
        event.preventDefault();
        axios.put(`http://localhost:5000/UPDATE/${t}/${d}/${v}`).then()
    }
    render() { 
        return (
            
        <scan align="center" className={green.gestion}>
      
        <table id={green.table} classNAme={green.tablecontainer}>
            <thead>
                <tr id={green.td}>
                   <th id={green.th} scoop="col">السبت</th>
                   <th id={green.th} scoop="col">الجمعة</th>
                   <th id={green.th} scoop="col">الخميس</th>
                   <th id={green.th} scoop="col">الاربعاء</th>
                   <th id={green.th} scoop="col">الثلثاء</th>
                   <th id={green.th} scoop="col">الاثنين</th>
                   <th id={green.th} scoop="col">#</th>

                </tr>
            </thead>
            
            {this.state.persons.map( post => {
             return(
                 <tbody><tr id={green.tr}>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte"  className={green.inputTxt} placeholder={post.samedi} 
                   onChange={(event) => this.handlechange(event,post.id_emploi,"samedi",event.target.value)}></input></div></td>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte" className={green.inputTxt} placeholder={post.vendredi}
                 onChange={(event) => this.handlechange(event,post.id_emploi,"vendredi",event.target.value)} ></input></div></td>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte" className={green.inputTxt}  placeholder={post.jeudi}
                onChange={(event) => this.handlechange(event,post.id_emploi,"jeudi",event.target.value)}></input></div></td>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte" className={green.inputTxt}  placeholder={post.mercredi}
                onChange={(event) => this.handlechange(event,post.id_emploi,"mercredi",event.target.value)}></input></div></td>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte" className={green.inputTxt} placeholder={post.mardi}
                onChange={(event) => this.handlechange(event,post.id_emploi,"mardi",event.target.value)}></input></div></td>
                <td id={green.td} className={green.inputTxt1}><div><input type="texte" className={green.inputTxt} placeholder={post.lundi}
                onChange={(event) => this.handlechange(event,post.id_emploi,"lundi",event.target.value)}></input></div></td>
                <td id={green.td} className={green.time1}>      {post.heur}</td>
                </tr></tbody>
             )
            }   )}
                
                
            
        </table>
    </scan>
       
         )
    }
}
 
export default EditTAble;