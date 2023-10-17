const express =  require("express")

const router = express.Router()

const {createClient} = require("../controllers/usersControllers")

router.post("/create",createClient)



module.exports = router;