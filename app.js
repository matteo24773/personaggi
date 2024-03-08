const express=require('express');
const logRouter=require('./routers/log')
const homRouter=require('./routers/homRouter')
const cors=require('cors')
const path=require('path');

const app=express();
const uri='mongodb+srv://hum:160242377@cluster0.ngco8td.mongodb.net/es?retryWrites=true';
const mongo=require('mongodb').MongoClient

app.get('/dati',async (req,res)=>{
    let connect=await new mongo(uri).connect();
    let db= connect.db('es');
    let risult= await db.collection('charcter').find({"_id":2}).toArray();
    res.send(risult)
})
app.use(express.static(path.join(__dirname,'front')));
app.use(express.static(path.join(__dirname,'/node_modules/bootstrap')));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join('./view'));
app.use('/',logRouter);
app.use('/hom',homRouter)
app.listen(8080);