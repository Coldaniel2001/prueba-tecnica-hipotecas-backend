const express = require('express')
const cors = require('cors')



const usersRouters = require('./routes/users.routes')
const financesRouters = require('./routes/finances.routes')

const app = express()

app.use(cors())
app.use(express.json())



app.use("/users", usersRouters)
app.use("/finances", financesRouters)



module.exports=app