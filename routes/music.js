const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('music/index')
})

module.exports = router