
const router=require('./generalRouter')
const controller=require('../controllers/homController')
router.get('/personaggi',controller);
router.post('/personaggi')

module.exports(router)