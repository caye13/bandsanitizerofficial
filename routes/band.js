const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('band/index')
})

module.exports = router