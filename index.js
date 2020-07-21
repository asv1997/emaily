const express = require('express');
const app = express();

app.get('/', (req,res,next) =>{
    res.send({name: 'Vicky'})
})

const PORT = process.env.PORT || 5000;  // WE MUST USE THE PORT WHICH HEROKU GIVES US
app.listen(PORT); //express telling node to listen in this port