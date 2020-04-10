const express = require('express')
const app = express()

app.listen(5432, () => {
    console.log('Listening for requests on port 5432!')
})