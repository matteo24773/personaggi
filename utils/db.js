const MongoClient=require('mongodb').MongoClient
const uri='mongodb+srv://hum:160242377@cluster0.ngco8td.mongodb.net/es?retryWrites=true';
const db=async()=>{
    return await new MongoClient(uri).connect()
}
module.exports=db;
