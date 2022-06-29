import   "./Donnees.css";
import Donne from "./Donne.png"



const DonneePersonnel = () => {




    
    return ( 

        <div className=" row2">
            <div className="donnee">
               <img src={Donne} className="image"/>
                  <div className="modifier">
                      
                          <div className="champ">
                          <button
                          className="btn modifierChamps"

                          >
                              تغيير
                              
                         </button>
                         
                      
                      <h3
                      className="form-control form2 ">تغيير الإسم</h3>
                          </div>
                          <div className="champ">
                          <button
                          className="btn modifierChamps"

                          >
                              تغيير
                              
                         </button>
                         
                      
                      <h3
                      className="form-control form2 ">تغيير اللقب</h3>
                          </div>
                          <div className="champ">
                          <button
                          className="btn modifierChamps"

                          >
                              تغيير
                              
                         </button>
                         
                      
                      <h3
                      className="form-control form2 ">تغيير إسم المستخدم</h3>
                          </div>
                          <div className="champ">
                          <button
                          className="btn modifierChamps"

                          >
                              تغيير
                              
                         </button>
                         
                      
                      <h3
                      className="form-control form2 ">تغيير كلمة السر</h3>
                          </div>
                          
                  </div>
                <button
                className="btn btn-center button">الرجوع إلى الصفحة الرئيسية</button>
            </div>
        </div>
     );
}
 
export default DonneePersonnel;