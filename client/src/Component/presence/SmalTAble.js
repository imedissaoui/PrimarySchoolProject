import React, { Component } from 'react';

import STStudent from './STStudent';
import pres from './presence.module.css'
import presdata from './presdata.json'
class Presence extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          number: 1  
        };
        
    }
        addColumn = () => {
            this.setState({number: this.state.number + 1 });
           
        };

    render() {
         const check1 = <input className={pres.SS}
        type="text" placeholder="التاريخ" /> ;
       
        
       
       

        return ( 
        
            <div className= {`${pres.background} ${pres.gestion}`} > 
             
            <div  className={pres.tablecontainer }>
            <div >
                      <select className={pres.Button}>
                           <option >janvier</option>
                           <option>fevrier</option>
                           <option>mars</option>
                           <option>avril</option>
                           <option>may</option>
                       </select>
                       <select className={pres.Button} placeholder="القسم والمادة">
                           
                           <option>اسلامية / 4ج</option>
                           <option>عربية / 5د</option>
                           <option>حساب / 4أ</option>
                       </select>
                      
                      

                       </div>
          <table >
           <thead align="centre">
               <tr >
                  
                    <th scoop="col"   align="center" className={pres.weak}> 
                    
                   
                    
                    
                    
                    </th>
                       
                       

               </tr>

           </thead>
           <tbody>
               <tr > 
                  <td  align="center" className={pres.vide1}  scoop="col"></td>
                   <td  align="center" className={pres.week}  scoop="col">تسجيل {check1} </td>
                   <td  align="center" className={pres.week}  scoop="col">تاريخ الغيابات</td>
                  
                  
                   <td   className="name1"> الاسم والقب </td>
               </tr>
            
         
         {presdata.map( post => {
             
             return( <>     <STStudent name={post.fullName}  id={post.id} num={this.state.number}/></> )
            }   )}

           
</tbody>

   

</table>
<div align="center">
<a id={pres.plus}  class={`${pres.btn} ${pres.blue} ${pres.circular}`} >تأكيد تسجيل الحضور</a> ;

</div>

</div>
 
</div> );
    }
}
 
export default Presence;