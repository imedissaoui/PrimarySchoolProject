
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react ,{component} from 'react';
import NavBar from './Component/NavBarItems/NavBar';

import Signup from './Component/SignUP/Signup';
import Landing from './Component/Landing/Landing';
import Footer from './Component/FooterItems/Footer';
import DonneePersonnel from './Component/DonnePersonnelItems/Donnees';
import SignupEnseignant from './Component/SignUP/SignUPItems/SignupEnseignat';
import SignupEleve from './Component/SignUP/SignUPItems/SignupEleve';
import Services from './Component/Services/services';
import HomePage from './Pages/HomePages';
import EnseignanPage from './Pages/EnseignantPage';
import { BrowserRouter as Router,Link,Switch,Route,useHistory } from 'react-router-dom'
import Contactus from './Component/ContactUs/contactus';
import Home from './Component/Home/home';
import ContactUS from './Pages/ContactUS';
import Donnee from './Pages/Donnee';
import SignIn from './Pages/Signin';
import GestionEnseignant from './Component/GestionEnseignantItems/GestionEnseignant';
import Homeadmin from './Pages/HomeAdmin';
import ErrorPage from './Pages/ErrorPage';
import AffectEnseignant from './Component/AffecteEnseignant/gestionenseignant';
import GestionClasse from './Component/GestionClasse/GestionClasse'
import DonneeEnseignant from './Pages/DonneeEnseignant';
import EmploiPage from './Pages/EmploiPage';
import ClassePage from './Pages/ClassePage';
import StatisticPage from './Pages/StatisticPage';
import MatierePage from './Pages/MatierePage';
import PresencePage from './Pages/PresencePage';
import GestionEnseignantPage from './Pages/GestionEnseignantPage';
import DossierPage from './Pages/DossierPage';
import GestionElevePage from './Pages/GestionElevePage';
import AffectEnseignantPage from './Pages/AffectEnseignantPage';
import SignupPage from './Pages/SignupPage';
import SignupEnseignantPage from './Pages/SignupEnseignantPage';
import SignUpElevePage from './Pages/SignUpElevePage';
import DonneeEnseignants from './Component/DonneeEnseignant/DonneeEnseignants';


function App() {
  

  return (
    
  


<Router>

          <Switch>
        
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/signup/enseignant" component={SignupEnseignantPage}/>
            <Route exact path="/signup/eleve" component={SignUpElevePage}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/services/1" component={/*EnseignanPage*/SignIn}/>
            <Route exact path="/enseignant-profile/" component={EnseignanPage}/>
            <Route exact path="/administration-profile/" component={Homeadmin}/>
            <Route exact path="/services/2" component={ContactUS}/>
            <Route exact path="/services/3" component={/*Homeadmin*/SignIn}/>
            <Route exact path="/donnee" component={DonneeEnseignants}/>
            <Route exact path="/donneeenseignant" component={DonneeEnseignants}/>
            <Route exact path="/emploi" component={EmploiPage}/>
            <Route exact path="/classe" component={ClassePage}/>
            <Route exact path="/statistic" component={StatisticPage}/>
            <Route exact path="/matiere" component={MatierePage}/>
            <Route exact path="/presence" component={PresencePage}/>
            <Route exact path="/gestionenseignant" component={GestionEnseignantPage}/>
            <Route exact path="/dossier" component={DossierPage}/>
            <Route exact path="/gestioneleve" component={GestionElevePage}/>
            <Route exact path="/affectenseignant" component={AffectEnseignantPage}/>
            <Route exact path="*" component={ErrorPage}/>
          </Switch>
  </Router>
 
  

    
  );
}

export default App;
