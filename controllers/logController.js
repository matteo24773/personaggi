const utenti=require('../model/utente').utenti
exports.getLog=(req,res)=>{
    res.render('log');
}

exports.autent=(req,res)=>{
    const utent = new utenti();
    dati=req.body
    if(check(utent,dati)){

        res.redirect('/hom')
    }else{
        res.status(404).render('404',{saltlog:true})
}
}

function check(utents,utent) {
    return utents.utenti.some(element => utent.email===element.Email&&utent.Password===element.password )
}
