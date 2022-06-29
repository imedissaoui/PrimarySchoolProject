import React, { Component } from 'react';
import pres from './presence.module.css'
class Student extends Component {
    state = {  }
   

    render() { 
        const check = <div >
        <input  type="radio" value="Male" name={this.props.id}  />P
        <input type="radio" value="Female" name={this.props.id} />A
        </div>;
        return ( 
            
            <tr >
            
            
            <td className={pres.vide1}> </td>
            <td ms className= {pres.CC}>{check}</td>
            <td className= {pres.CC}> {this.props.id}A/3P  </td>
            <td className={pres.name}>{this.props.name}</td>
         </tr>
   


         );
    }
}
 

export default Student;
