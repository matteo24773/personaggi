const path=require('path')
const fs=require('fs');
exports.utenti = class Utenti {
    constructor(){
        this.utenti=this.estrDati()
    }
    estrDati() {

        let rawUsers = fs.readFileSync(path.join(__dirname,'../data/utenti.json')) 
        let users = JSON.parse(rawUsers)
        return JSON.parse(rawUsers)
    
       
    }

}