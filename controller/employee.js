const { insertDB, employeeData, salary, experience, graduationyearAndExperience, updateSalary, deleteLastCompany } = require("../config/db")

const insertEmployeedata = async (req, res) => {
    const data = req.body
    const result = await insertDB(data)
    console.log(result)
    res.send(result)
}

const getData = async (req, res) => {
    const data = req.body
    const employeeDetails = await employeeData(data)
    console.log(employeeDetails)
    res.send(employeeDetails)
}

const getSalary = async (req, res) => {
    const data = req.body
    const salaryDetails = await salary(data)
    console.log(salaryDetails)
    res.send(salaryDetails)
}

const getExperience = async (req, res) => {
    const data = req.body
    const experienceDetails = await experience(data)
    console.log(experienceDetails)
    res.send(experienceDetails)
}

const getGraduationyearAndExperience = async (req, res) => {
    const data = req.body
    const experienceDetails = await graduationyearAndExperience(data)
    console.log(experienceDetails)
    res.send(experienceDetails)
}

const salaryUpdate = async (req, res) => {
    const data = req.body
    const experienceDetails = await updateSalary(data)
    console.log(experienceDetails)
    res.send(experienceDetails)
}

const deleteDocuments = async (req, res) => {
    const data = req.body
    const experienceDetails = await deleteLastCompany(data)
    console.log(experienceDetails)
    res.send(experienceDetails)
}

module.exports = { insertEmployeedata, getData, getSalary, getExperience, getGraduationyearAndExperience, salaryUpdate, deleteDocuments }