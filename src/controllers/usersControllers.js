const UserModel = require("../models/usersModels")

const createClient = async (req, res) => {
    const { name, dni, gmail } = req.body

    try {

        const newClient = await UserModel.create({
            name,
            dni,
            email: gmail,
        })
        return res.status(200).send({ status: 'OK', newClient })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}



module.exports = { createClient }