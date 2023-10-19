const { Schema, model } = require("mongoose")

const financeSchema = Schema({
    concept: {
        type: String,
        required: true
    },
    finance: {
        type: Number,
        required: true
    },
    amortization: {
        type: Number,
        required: true
    },
    monthlyFee: {
        type: Number,
        required:true
    },
    userDni: {
        type: String,
        ref: "Users",
    }
})

const FinancesModel = model("Finances", financeSchema)

module.exports = FinancesModel