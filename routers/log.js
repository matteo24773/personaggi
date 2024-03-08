
const express=require('express');
const logController=require('../controllers/logController')
const router=express.Router();


router.post( '/log',logController.autent);
router.get('/',logController.getLog);
module.exports=router;