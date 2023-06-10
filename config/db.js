const { MongoClient } = require("mongodb")
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)

const insertDB = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.insertMany(data)
    await client.close()
    return dbresponse
}

const employeeData = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.find().toArray()
    await client.close()
    return dbresponse
}

const salary = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.find({ "salary": { $gt: "30000" } }).toArray()
    await client.close()
    return dbresponse
}

const experience = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.find({ "overallExp": { $gt: "2" } }).toArray()
    await client.close()
    return dbresponse
}

const graduationyearAndExperience = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.find({ "yearGrad": { $gt: "2015" }, "overallExp": { $gt: "1" } }).toArray()
    await client.close()
    return dbresponse
}

const updateSalary = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.updateMany({ "salary": { $gt: "30000" } }, { $set: { "salary": "30000" } })
    await client.close()
    return dbresponse
}

const deleteLastCompany = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbresponse = await collection.deleteMany({ "lastCompany": "Y" })
    await client.close()
    return dbresponse
}



module.exports = { insertDB, employeeData, salary, experience, graduationyearAndExperience, updateSalary, deleteLastCompany }