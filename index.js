const app = require('express');
var bodyparser = require('body-parser')
var controller = require('./config/studentRegister')



app.post('/register', controller.register)
app.post('/updateStudent', controller.register)



app.listen(8000, () => {
    console.log("running on 8000")
})