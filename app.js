const express=require('express');
const logRouter=require('./routers/log')
const regRouter=require('./routers/regRouter')
//const personaggiRouter=require('./routers/personaggi')
const cors=require('cors')
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'front')));
app.use(express.static(path.join(__dirname,'/node_modules/bootstrap')));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join('./view'));
app.use('/',logRouter);
app.use('/registrazione',regRouter)
//app.use('/personaggi',personaggiRouter)
//app.use('/hom',homRouter)
app.listen(8080);