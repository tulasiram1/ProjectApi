const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AllColleges = require('./../models/AllColleges');
const BrachAE = require('./../models/BrachAE');
const BranchCSE = require('./../models/BrachCSE');
const BranchME = require('./../models/BrachME');


router.get('/college/:collegeName', async (req, res, next) => {
    const data = await AllColleges.find({ IN: req.params.collegeName });
    res.status(200).json({
        message: 'sucess',
        data
    })
});
router.get('/branch/:branchName', async (req, res, next) => {
    const data = await AllColleges.find({ APN: req.params.branchName });
    res.status(200).json({
        message: 'sucess',
        data
    })
});

module.exports = router;