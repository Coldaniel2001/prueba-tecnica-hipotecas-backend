const express = require("express")

const router = express.Router()

const { saveFinances } = require("../controllers/financesControllers")

router.post("/add/:clientDni", saveFinances)




module.exports = router;