import React, { Component } from 'react';
import axios from 'axios';
import  {Table} from 'react-bootstrap'
import Student from './student';
import pres from './presence.module.css'
import presdata from './presdata.json'
class Presence extends Component {
    constructor(props) {
        super(props);
        let larg = window.innerWidth;
        this.state = {
          number: 1  
        };
        
    }  
      submit = (event) => {
          let day = "aaa"
        for(var i=0;i<presdata.length;i++)
        { 
            let STI = document.getElementById(presdata[i].id)    
            console.log(STI)
             
            if(STI.checked == true)
            { 
             axios.post(`http://localhost:5000/SetAb/${presdata[i].id}/${"P"}/${day}`).then()

        
                }
            else  {
                axios.post(`http://localhost:5000/SetAb/${presdata[i].id}/${"A"}/${day}`).then()
            }
            }    
        
        alert("تم تسجيل الحضور")
       
        

      }
  
        addColumn = () => {
            this.setState({number: this.state.number + 1 });
           
        };

    render() {
        const check1 = <input className={pres.SS}
        type="text" /> ;
       
       

        return ( 
        
            <div className= {`${pres.background} ${pres.gestion}`} > 
             
            <div  >
          <hr/>
          <Table >
           <thead align="centre">
               <tr >
                  
                    <th scoop="col" colSpan={16}  align="center" className={pres.weak}> 
                    
                    <input className="date1" placeholder=" 00/00/00  التاريخ"/>  
                   
                       <select className={pres.Button} placeholder="القسم والمادة">
                           
                           <option>اسلامية / 4ج</option>
                           <option>عربية / 5د</option>
                           <option>حساب / 4أ</option>
                       </select>
                       
                    
                    
                    </th>
                       
                       

               </tr>

           </thead>
           <tbody>
            <hr/>
            
         
         {presdata.map( post => {
             
             return( <>     <Student name={post.fullName}  id={post.id} num={this.state.number}/></> )
            }   )}

           
</tbody>

   

</Table>
<div align="center">
<a id={pres.plus} onClick={(event) => this.submit(event)} class={`${pres.btn} ${pres.blue} ${pres.circular}`} >تأكيد تسجيل الحضور</a> ;

</div>

</div>
 
</div> );
    }
}
 
export default Presence;