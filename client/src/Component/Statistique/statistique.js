import React from 'react';
import './statistique.css';
import {BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {useHistory,BrowserRouter as Router,Link} from 'react-router-dom';
import{IoArrowBackSharp} from 'react-icons/io5';
import{AiFillDelete} from 'react-icons/ai';
import{AiFillEdit} from 'react-icons/ai';
import Flip from 'react-reveal/Flip';




const Statistique = () => {
    
    let History =useHistory();
      const data2 = [
       
        { name: 'العدد', بنات: 14,أولاد:12,amt:30 },
        { name: 'نتائج مميزة فوق 15', بنات: 10,أولاد:8,amt:100 },
        { name: 'نتائج أقل من المأمول', بنات: 2,أولاد:4,amt:100 },
        { name: 'نتائج متوسطة ', بنات: 2,أولاد:4,amt:100 },
        { name: 'نتائج ضعيفة   ', بنات: 2,أولاد:4,amt:100 },
        

        
      ];
      
    
    
    return (
       <Router><div className="stat">
         <div className="back">
         <Link
            className="btn504"
            onClick={()=>History.push('/services/1')}
            >
            <IoArrowBackSharp
            color="#153f65"
            size="50px"
            />
            </Link>
         </div>
          <h1 className='static'>الإحصائيات          </h1>
          <Flip  right duration={2000}>
          <h1 className="classe1">القسم 1</h1>
          </Flip >
           
           <div className="pie1">
           
         <>
         <BarChart
         width={900}
         height={250}
         data={data2}
         margin={{
           
           left: 150,
           
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="أولاد" fill="#153f65 " />
         <Bar dataKey="بنات" fill="#c1e3ff " />
       </BarChart>
       </>
         </div>
         <Flip right duration={2000}>
          
      

         <h1 className="classe2">القسم 2      </h1>
         </Flip>
           
           <div className="pie2">
           
         <BarChart
         width={900}
         height={250}
         data={data2}
         margin={{
           
           left: 150,
          top:25,
           
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="أولاد" fill="#153f65 " />
         <Bar dataKey="بنات" fill="#c1e3ff " />
       </BarChart>
       
          
           
           </div>
         

         
        
       
       
       </div></Router>
    );
};

export default Statistique;