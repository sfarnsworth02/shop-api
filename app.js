const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=> { res.send('Future Shopping Site')})

app.listen(PORT, (err)=>
{
    if (err)
    {
        console.log(`Error listening on port ${PORT}`)
    }
    console.log(`App is listening on port ${PORT}`)
})