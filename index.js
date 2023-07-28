const express =require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send('salam')
})
// Routes
const usersRoute = require('./routes/users')
const productsRoutes = require('./routes/products')
app.use('/products',productsRoutes)
app.use('/users',usersRoute)


app.listen(3000,()=>console.log('I-> Server is running PORT:3000'))