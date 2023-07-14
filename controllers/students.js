module.exports = { index, show };
const Student = require("../models/students");

function index(req, res) {
    res.render("students/index", { students: Student.getAll() });
}

function show(req, res) {
    let id = parseInt(req.params.id);
    console.log(id);
    res.render("students/show", { student: Student.getOne(id) });
}
