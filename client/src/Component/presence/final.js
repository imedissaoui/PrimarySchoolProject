import React, {  useState , useEffect} from "react";
import Presence from './presence'
import SmalTable from './SmalTAble'
function useWindowSize() {
const [size, setSize] = useState([window.innerHeight,window.innerWidth]);
useEffect(() => {
    const handleresize = () => {
        setSize([window.innerHeight,window.innerWidth]);
    }
    window.addEventListener("resize",handleresize )


} ,[])


return size }
function Final() {
    const [height , width] = useWindowSize();
   
       { if( width>800)
        {
            return(  <Presence />);
        } 
        else{
            return(<div>
               
               <SmalTable/>
            </div> );
        }
           
       
     
 
    

}}
export default Final;
