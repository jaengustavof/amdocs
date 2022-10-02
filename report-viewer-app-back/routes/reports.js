const { application } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path');

const testFolder = './api/reports';

router.get('/', (req,res)=>{
    let reportsAvailable = []
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            if(path.extname(file) === '.json') {
                reportsAvailable = [...reportsAvailable, file]       
            } 
        });
        JSON.stringify(reportsAvailable)
        res.json({ reportsAvailable })
    });
})


router.post('/request', (req,res)=>{
    const {report} = req.body;
    res.status(200).json({
        response: require(`../api/reports/${report}`)
    })
});



module.exports = router