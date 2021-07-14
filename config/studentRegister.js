var Student = require('./../models/studentSchema')
var mongoose = require('mongoose')




exports.register = async(req, res) => {
    var student = req.body;
    console.log(student)
    var sub = student.subjects.split(' ')
    var socities = student.socities.split(' ')
    Student
        .findOneAndUpdate({
            name: student.name
        }, {
            contact: student.contact,
            class: student.class,
            subjects: sub,
            socities: socities,
            year: student.year
        }, {
            upsert: true
        })
        .exec((err, user) => {
            if (err)
                res.send('en error occured')
            else
                console.log(user)
            res.send("registered successfully")
        })



}