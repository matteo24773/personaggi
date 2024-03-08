
const router=require('./generalRouter')
const controller=require('../controllers/homController')
router.get('/hom',controller);

module.exports(router)