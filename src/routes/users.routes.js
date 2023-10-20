const express =  require("express")

const router = express.Router()

const {createClient, getOneClient, updateClient, deleteClient} = require("../controllers/usersControllers")

router.post("/create",createClient)
router.get("/create/:clientDni", getOneClient)
router.put("/update", updateClient)
router.delete("/deleteClient/:clientDni", deleteClient)




module.exports = router;