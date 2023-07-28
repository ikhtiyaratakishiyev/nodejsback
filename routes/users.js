const router = require('express').Router()

const users =[
    {
        id:1,
        userName: 'ehmed',
        password: 'ehmed123'
    },
    {
        id:2,
        userName: 'nezrin',
        password: 'nezrin123'
    },
    {
        id:3,
        userName: 'memmed',
        password: 'memmed123'
    },
]


router.get('/',(req,res)=>{
    res.status(200).json(users)
})
router.get('/:id',(req,res)=>{
    const findUser = users.find(item=>item.id==req.params.id)
   if(!findUser){
    res.status(404).json({message: "user not found"})
   }else{
    res.status(200).json({findUser})
   }
})

router.post('/',(req,res)=>{
    res.send('/users POST metodu ishledi')
})
router.patch('/',(req,res)=>{
    res.send('/users PATCH metodu ishledi')
})
router.delete('/',(req,res)=>{
    res.send('/users DELETE metodu ishledi')
})

module.exports = router