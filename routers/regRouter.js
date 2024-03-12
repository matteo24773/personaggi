const router = require("./generalRouter");
const regController=require('../controllers/regController')

router.get('/registrazione',regController.get)
//router.post('/registrazione',regController.post)


module.exports=router