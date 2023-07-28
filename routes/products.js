const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('Products GET metodu ishledi')
})
router.post('/',(req,res)=>{
    res.send('Products POST metodu ishledi')
})
router.patch('/',(req,res)=>{
    res.send('Products PATCH metodu ishledi')
})
router.delete('/',(req,res)=>{
    res.send('Products DELETE metodu ishledi')
})


module.exports=router