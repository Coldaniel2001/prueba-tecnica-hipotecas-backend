const FinancesModels = require("../models/financesModels")

const saveFinances = async (req, res) => {

    const { concept, finance, amortization, interest, result } = req.body
    const { clientDni } = req.params

    try {
        const newFinance = await FinancesModels.create({
            concept,
            finance,
            amortization,
            interest,
            monthlyFee: result.toFixed(2),
            userDni: clientDni
        })

        return res.status(200).send({ status: 'OK', newFinance })


    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const getFinancesFromClient = async (req, res) => {
    const { clientDni } = req.params

    try {
        const getInfoFinances = await FinancesModels.find({ userDni: clientDni })

        return res.status(200).send({ status: 'OK', getInfoFinances })


    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const deleteClient = async (req, res) => {
    const { clientDni } = req.params;

    try {

        const deleteClient = await FinancesModels.deleteMany({ userDni: clientDni })

        return res.status(200).send({ status: 'OK' })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const deleteFinances = async (req, res) => {
    const { financesId } = req.params;
    const { userDni } = req.body;

    try {

        const deleteClient = await FinancesModels.deleteOne({ _id: financesId })
        const getAllFinances = await FinancesModels.find({userDni: userDni})
        return res.status(200).send({ status: 'OK', getAllFinances })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const editFinances = async (req, res) => {
    const { financesId } = req.params;
    const { concept, finance, amortization, interest, monthlyFee, userDni } = req.body;
    
    try {


        const updateFinances = await FinancesModels.findOneAndUpdate({ _id: financesId }, {
            concept: concept,
            finance: finance,
            amortization: amortization,
            interest: interest,
            monthlyFee: monthlyFee
        },
        {
            new:true
        })

        const getAllFinances = await FinancesModels.find({userDni: userDni})
       
        return res.status(200).send({ status: 'OK', getAllFinances })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { saveFinances, getFinancesFromClient, deleteClient, deleteFinances, editFinances }