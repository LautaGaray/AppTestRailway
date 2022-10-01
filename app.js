import express from 'express'

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT , (req, res)=>{
    console.log('app listen on port '+ PORT);
});

app.get('/', (req, res)=>{
    res.send({status: 200, message:"OK"});
})