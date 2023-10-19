const express = require("express")

const router = express.Router()

const { saveFinances, getFinancesFromClient } = require("../controllers/financesControllers")

router.post("/add/:clientDni", saveFinances)
router.get("/:clientDni", getFinancesFromClient)



module.exports = router;