const player= require('../model/personaggio')
const mongoConnect=require('../utils/db')


exports.liste=async (req,res)=>{
    let client=(await mongoConnect()).connect()
    let db=(await client).db('charcter').collection
    res.redirect('hom',{lista:db})
}
