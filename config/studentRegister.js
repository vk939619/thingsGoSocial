var Student = require('./../models/studentSchema')





exports.register = async(req, res) => {
    var student = req.body;
    var sub = student.subjects.split(' ')
    var socities = student.socities.split(' ')
    Student
        .findOneAndUpdate({
            name: student.name,
            contact: student.contact,
            class: student.class,
            subjects: sub,
            socities: socities,
            year: student.year
        }, {
            upsert: true
        })
        .exec((err, user) => {})
}