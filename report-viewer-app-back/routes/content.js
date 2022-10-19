const express = require('express');
const router = express.Router() ///express router

const api = require('../api/reports')

router.get('/', (req,res)=>{
    res.status(200).json(api.content)
});





module.exports = router