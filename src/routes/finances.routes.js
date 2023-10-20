const express = require("express")

const router = express.Router()

const { saveFinances, getFinancesFromClient, deleteClient,deleteFinances, editFinances } = require("../controllers/financesControllers")

router.post("/add/:clientDni", saveFinances)
router.get("/:clientDni", getFinancesFromClient)
router.delete("/deleteClientFinances/:clientDni", deleteClient)
router.delete("/deleteFinances/:financesId", deleteFinances)
router.put("/editFinances/:financesId", editFinances)


module.exports = router;