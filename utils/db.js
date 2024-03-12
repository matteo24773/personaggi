const mongoClient=require('mongodb').MongoClient
class Db{
    constructor(collection){
        console.log('in esecuzione...')
        this.uri='mongodb+srv://hum:160242377@cluster0.ngco8td.mongodb.net/es?retryWrites=true';
        this.db=this.conn(collection)
    }

    async conn(collection) {
        console.log((await mongoClient.connect(this.uri)).db(collection))
        console.log("FSdfdsfds  ")
        return (await mongoClient.connect(this.uri)).db(collection)
    
    }

    
}
module.exports=Db