const express = require('express');
const { fetchLatest } = require('./service');

const router = express.Router();


router.route('/').get(async (req,res,next) => {
    try {
        const data = await fetchLatest()
        // return res.status(200).send(data);
        throw "Error"
    } catch (error) {
        // throw error;
        next();
    }
});


module.exports = router