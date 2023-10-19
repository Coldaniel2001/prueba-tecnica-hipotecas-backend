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
    const {clientDni} = req.params

    try {
       const getInfoFinances = await FinancesModels.find({userDni:clientDni})

            return res.status(200).send({ status: 'OK', getInfoFinances })
        

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { saveFinances, getFinancesFromClient }