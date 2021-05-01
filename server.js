const express = require ('express')

const app = express()

const port = process.env.PORT || 4444


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to port "+port);
});