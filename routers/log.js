

const logController=require('../controllers/logController')
const router = require('./generalRouter')


router.post( '/',logController.autent);
router.get('/',logController.getLog);
module.exports=router;