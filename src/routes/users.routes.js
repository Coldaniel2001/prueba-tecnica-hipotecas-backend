const express =  require("express")

const router = express.Router()

const {createClient, getOneClient, updateClient} = require("../controllers/usersControllers")

router.post("/create",createClient)
router.get("/create/:clientDni", getOneClient)
router.put("/update", updateClient)



module.exports = router;