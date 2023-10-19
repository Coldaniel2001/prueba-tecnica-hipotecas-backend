const UserModel = require("../models/usersModels")

const createClient = async (req, res) => {
    const { name, dni, gmail } = req.body

    try {
        const dniExist = await UserModel.findOne({ dni })
        const gmailExist = await UserModel.findOne({ email: gmail })
        if (dniExist && !gmailExist) {
            console.log(dni)
            return res.status(200).send({ status: 'EXISTE DNI' })
        }else if(gmailExist && !dniExist){
            console.log(dni)
            return res.status(200).send({ status: 'EXISTE Gmail' })
        }else if(dniExist && gmailExist){
            console.log(dni)
            return res.status(200).send({ status: 'EXISTE Gmail y DNI' })
        }else{
            console.log(dni)
            const newClient = await UserModel.create({
                name,
                dni,
                email: gmail,
            })
            return res.status(200).send({ status: 'OK', newClient })
        }

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const getOneClient = async (req, res) => {
    const { clientDni } = req.params

    try {

        const getOneClient = await UserModel.findOne({ dni: clientDni })

        return res.status(200).send({ status: 'OK', getOneClient })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const updateClient = async (req, res) => {
    const {dni, email, name} = req.body;

    try {

        const updateClient = await UserModel.findOneAndUpdate({dni}, {
            email,
            name
        })

        return res.status(200).send({ status: 'OK', getOneClient })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}



module.exports = { createClient, getOneClient, updateClient }