const express =  require("express")

const router = express.Router()

const {createClient, getOneClient} = require("../controllers/usersControllers")

router.post("/create",createClient)
router.get("/create/:clientDni", getOneClient)



module.exports = router;