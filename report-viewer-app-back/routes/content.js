const express = require('express');
const router = express.Router() ///express router
const fs = require('fs');

const api = require('../api/reports')

router.get('/', (req,res)=>{
    res.json(api.content)
});





module.exports = router