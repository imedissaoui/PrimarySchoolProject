/*const express = require("express");
const mysql = require('mysql');
const bodyParser= require('body-parser');


// connection a la base de donnee
var Mysqlconnection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"EcolePrimaire"

});
Mysqlconnection.connect((err)=>{
  if(!err){
      console.log("connection succedded");
  }
})


const app = express();



app.listen(5000,(req,res)=>{
  console.log("server is running on port 5000");
  Mysqlconnection.query()
})
*/
const express = require('express');
var app = express();
const mysql = require('mysql');
const cors = require('cors');
const { Router } = require('express');
const path=require('path');

const {google}= require('googleapis');
const fs =require('fs');
app.use(express.urlencoded());







app.use(cors());
app.use(express.json());
var router = express.Router();



var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ecoleprimaire'
  });

  db.connect((err)=>{
      if(!err){
          console.log("connecion sucessed");
      }
  });
 
/**************************** */
 app.post('/gestion', (req, res) => {
const password = req.body.password;
const genre = req.body.genre;
const login = req.body.login;
const nom = req.body.nom;
const prenom = req.body.prenom;
    db.query('INSERT INTO enseignant (nom,prenom,genre,login,mdp) VALUES (?,?,?,?,?)',
    [nom,prenom,genre,login,password],
    (err , result)=> {
        if(err) {
            console.log(err)
        }
        else {
            res.send("okaayyy")
        }
    }

    )
}
 );
/******************************** */
 app.get('/data',(req,res)=>{
     console.log('start data')
     console.log(res);
     console.log('finish data')
    db.query('SELECT * FROM enseignant ',
     
     (err,result)=>{
        
         console.log(result);
         console.log(res);
        if(err) {
            console.log(err)
            } 
        console.log(result);
        res.send(result);
        })
      

     }
     )
/************************************************** */
app.delete('/delete/:id',(req,res)=>{
    console.log('delete...')
    console.log(req.params);
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM enseignant WHERE id_enseignant = ? ",[id], (err,result)=>{
    if(err) {
    console.log(err);
            } 
        else{
            
            res.send(result);
            console.log('sucess delete');
        }}) })

/***************************************** */
     app.post('/saveens', (req, res) => {
        const password = req.body.password;
        const genre = req.body.genre;
        const login = req.body.login;
        const nom = req.body.nom;
        const prenom = req.body.prenom;
            db.query('INSERT INTO enseignant (nom,prenom,genre,login,mdp) VALUES (?,?,?,?,?)',
            [nom,prenom,genre,login,password],
            (err , result)=> {
                if(err) {
                    console.log(err)
                }
                else {
                    res.send("okaayyy")
                }
            }
        
            )
        }
         );
        
/************************************************ */
app.post('/saveelv', (req, res) => {
    const date = req.body.date;
    const genre = req.body.genre;
    const numinscription = req.body.numinscri;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
        db.query('INSERT INTO eleve (nom,prenom,sexe,date_naissance,num_inscription) VALUES (?,?,?,?,?)',
        [nom,prenom,genre,date,numinscription],
        (err , result)=> {
            if(err) {
                console.log(err)
            }
            else {
                res.send("okaayyy")
            }
        }
    
        )
    }
     );
     /*********************************************************** */
   
     app.post('/login', (req, res) => {
        const email = req.body.login;
        const password = req.body.password;
            db.query('SELECT * FROM enseignant where login = ?',
            [email],
            (err , result)=> {
                console.log(result.length);
                console.log( password);
                console.log(result[0].mdp);
                
           

                if(result[0].mdp == password) {
                  res.send(result);
                 
                   console.log("login fait")
                   
                   
                  

                } 
                else {
                    console.log(result);
                    res.send({message:'wrong username!'});
                   
                }
            }
        
            )
        }
         );
      
 /************************************************************************************** */ 
 app.post('/affec/:a/:b/:c',(req,res) => {
    db.query(`INSERT INTO affectation_enseignant (id_enseignant,id_matiere,id_classe) VALUES (?,?,?) `, [req.params.a,req.params.b,req.params.c] ,
        
     
    (err,result)=> {
      
        if(err) {
            console.log(err);
            
        }
        else {
            console.log("step2");
          
            console.log(result)
            res.send(result);
        }
    }
    )
 })
 app.get('/affectation', (req, res) => {
    
    const libelle = req.body.libelle;
    const niveau = req.body.niveau;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    console.log(req.body);
    console.log("start affectation")
         db.query( ' SELECT E.id_enseignant , C.id_classe , M.id_matiere    FROM enseignant AS  E , classe AS C , matiere AS M WHERE E.nom = ? AND M.libelle = ? AND C.niveau = ? ',
         [nom,niveau,libelle],
        (err , result) => {
            console.log("start");
            console.log(result);
            console.log(nom);
            console.log(prenom);
            if(err) {
                console.log(err)
            }
            else {
                console.log("id en cours");
                console.log(result);
                
               res.send(result)                
                

            }
           
        }
    
        )

       
       
        
    }
     );
     /************************************ */
     app.get('/data2',(req,res)=>{
        console.log('start dataEns')

        
       /* 'SELECT E.nom , E.prenom, C.nom ,M.libelle  FROM enseignant AS E , classe AS C , matiere AS M  WHERE E.nom = ? AND E.prenom = ? AND C.nom = ? AND M.libelle = ? */
       db.query(  "SELECT E.nom , E.prenom , M.libelle , C.niveau  FROM enseignant AS E , classe AS C , matiere AS M, affectation_enseignant AS B WHERE E.id_enseignant=B.id_enseignant AND M.id_matiere=B.id_matiere AND C.id_classe=B.id_classe ",
        
        (err,result)=>{
           
          /*  console.log(result);
            console.log(res);
            console.log(E.nom);*/
           if(err) {
               console.log(err)
               } 
           console.log(result);
           res.send(result);
           })
         
   
        }
        )
/************************************CLASSE************************************* */
app.get('/data3',(req,res)=>{
    console.log('start data3')
    console.log(res);
    console.log('finish data3')
   db.query('SELECT * FROM classe ',
    
    (err,result)=>{
       
        console.log(result);
        console.log(res);
       if(err) {
           console.log(err)
           } 
       console.log(result);
       res.send(result);
       })
     

    }
    )
    app.post('/gestionclasse', (req, res) => {
        const niveau = req.body.niveau;
        const nom = req.body.nom;
        const nb = req.body.nb;
        const anneescolaire = req.body.anneescolaire;
            db.query('INSERT INTO classe (niveau,nom,nb,anneescolaire)  VALUES (?,?,?,?)',
            [nb,niveau,nom,anneescolaire],
            (err , result)=> {
                if(err) {
                    console.log(err)
                }
                else {
                    res.send("okaayyy classe")
                }
            }
        
            )
        }
         );

         app.delete('/deleteclasse/:id',(req,res)=>{
            console.log('delete classe...')
            console.log(req.params);
            const id = req.params.id;
            console.log(id);
            db.query("DELETE FROM classe WHERE id_classe = ? ",[id], (err,result)=>{
            if(err) {
            console.log(err);
                    } 
                else{
                    
                    res.send(result);
                    console.log('sucess delete classe');
                }}) })

/******************************Matiere***************************** */
app.get('/data4',(req,res)=>{
    console.log('start data4')
    console.log(res);
    console.log('finish data4')
   db.query('SELECT * FROM matiere ',
    
    (err,result)=>{
       
        console.log(result);
        console.log(res);
       if(err) {
           console.log(err)
           } 
       console.log(result);
       res.send(result);
       })
     

    }
    )
    app.post('/gestionmatiere', (req, res) => {
        const niveau = req.body.niveau;
        const libelle = req.body.libelle;
       
            db.query('INSERT INTO matiere (niveau,libelle)  VALUES (?,?)',
            [niveau,libelle],
            (err , result)=> {
                if(err) {
                    console.log(err)
                }
                else {
                    res.send("okaayyy matiere")
                }
            }
        
            )
        }
         );

         app.delete('/deletematiere/:id',(req,res)=>{
            console.log('delete matiere...')
            console.log(req.params);
            const id = req.params.id;
            console.log(id);
            db.query("DELETE FROM matiere WHERE id_matiere = ? ",[id], (err,result)=>{
            if(err) {
            console.log(err);
                    } 
                else{
                    
                    res.send(result);
                    console.log('sucess delete classe');
                }}) })
app.listen(3001, ()=> {
    console.log("server is running on port 3001");

});