// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//HTTP METHODS
app.get('/v1/explorers',(req,res) =>{
    console.log(`Api Explorers`, (req, res)=>{
        const explorer1 = {id:1, name:"Liz1"} 
        const explorer2 = {id:2, name:"Liz2"}
        const explorer3 = {id:3, name:"Liz3"} 
        const explorer4 = {id:1, name:"Liz4"}  
        const explorers =[explorer1,explorer2,explorer3,explorer4]
        res.status(200).json(explorers)   
    })
})

//GET
app.get('/v1/explorers/:id',(req,res) =>{
    console.log(`Api Explorers GET request`, (req, res)=>{
        console.log(`Api Explorers GET requets ${new Date()}`)
        console.log(`Getting explorer with id ${req.params.id}`)
        const explorer = {id:1, name:"Liz"}
        res.status(200).json(explorer)   
    })
})

//POST
app.post('/v1/explorers',(req,res) =>{
    console.log(`Api Explorers GET request`, (req, res)=>{
        console.log(`Api Explorers POST requets ${new Date()}`)
        const requestBody = req.body //Parametros de un cliente
        res.status(200).json({message:"Created"})   
    })
})

//PUT
app.put('/v1/explorers',(req,res) =>{
    console.log(`Api Explorers PUT request`, (req, res)=>{
        console.log(`Api Explorers PUT requets ${new Date()}`)
        console.log(`Update explorer with id ${req.params.id}`)
        const requestBody = req.body //Parametros de un cliente
        res.status(200).json({message:"Updated"})   
    })
})

//DELETE
app.put('/v1/explorers/:id',(req,res) =>{
    console.log(`Api Explorers DELETE request`, (req, res)=>{
        console.log(`Api Delete Explorers DELETE request ${new Date()}`)
        console.log(`Delete explorer with id ${req.params.id}`)
        const requestBody = req.body //Parametros de un cliente
        res.status(200).json({message:"Deleted"})   
    })
})




