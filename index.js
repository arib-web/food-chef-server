const express = require('express')
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors')

const chefsData = require('./data/data.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.get('/chefs', (req, res)=>{
    res.send(chefsData)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const specificChef = chefsData.chefs.find(scDes => scDes.id == id) || {};
    res.send(specificChef);
})



app.listen(port, ()=>{
    console.log(`food chef server is running on port: ${port}`)
})