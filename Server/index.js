const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const port = process.env.Port || 5000
app.use(express.urlencoded());
app.use(express.json())


const pool = mysql.createPool({
    connectionLimit : 10, 
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ecoleprimaire',
    multipleStatements: true
   
   })
   app.use(cors())

//========================================================================================
//========================================================================================
   // select element
   app.get('/geta', (req,res)=> {
   
    pool.query('SELECT * from  emploi',(err,rows)=> {
   
        //     connection.release() // this one return the connection to the pool
                 if(!err){
                     res.send(rows)
                 } else {
                     console.log(err)
                 }
                })
   })
   // UPDATE by id // this is the desired one
   app.put('/UPDATE/:t/:d/:v', (req,res)=> {
    
    pool.query(`UPDATE emploi SET ${req.params.d} = ? WHERE id_emploi = ?`,[req.params.v,req.params.t],(err,rows)=> {

        //  connection.release() // this one return the connection to the pool
          if(!err){
              res.send(rows)
          } else {
              console.log(err)
          }
         })
})
//delete element by id

app.delete('/:id', (req,res)=> {
   
    pool.getConnection((err,connection)=>{
       if(err) throw err
       console.log(`connected as ${connection.threadId}`)
       connection.query('DELETE from emploi WHERE id_emploi = ?',[req.params.id],(err,rows)=> {

        connection.release() // this one return the connection to the pool
        if(!err){
            res.send('deleted succesfully')
        } else {
            console.log(err)
        }
       })
      

    })
})

//===========================================================================================================
//===========================================================================================================
// ADD ABSENCE VALUE
app.post('/SetAb/:id/:val/:date', (req,res)=> {
   
    
    pool.query('INSERT INTO absence  (id_eleve,jour,val_absence)  VALUES (?,?,?) ',[req.params.id,req.params.date,req.params.val],(err,rows)=> {

       // connection.release() // this one return the connection to the pool
        if(!err){
            res.send('ADDED succesfully')
        } else {
            console.log(err)
        }
       })
      
})
//SELECT STUDENT BY ID
app.get('/Student/:id', (req,res)=> {
   
    pool.query(`SELECT * from  absence where id_eleve = ?`,[ req.params.id],(err,rows)=> {

        //     connection.release() // this one return the connection to the pool
                if(!err){
                    res.send(rows)
                } else {
                    console.log(err)
                }
               })
})









   app.listen(port ,()=> console.log(`running in port ${port}`) )