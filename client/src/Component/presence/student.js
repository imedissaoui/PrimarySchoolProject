import React, { Component , useState } from 'react';
import pres from './presence.module.css';
import axios from 'axios';
class Student extends Component {
    state = {  
        persons : []
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/Student/${this.props.id}`).then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
     
    
    render() { 
        const check = <div>
        <input className={pres.CC} id={this.props.id} type="radio" value="Male" name={this.props.id}  />P
        <input  className={pres.CC} type="radio" value="Female" name={this.props.id} />A
        </div>;
        return ( 
            <tr  >
           {this.state.persons.map(cc => {
               return ( <td className={pres.CC}> {cc.val_absence}   </td> )
           })}  
          
     
        <td >{check}</td>
        <td className={pres.nom}>{this.props.name}</td>
         </tr>
   


         );
    }
}
 

export default Student;
