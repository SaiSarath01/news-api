const express = require('express');
const { fetchLatest } = require('./service');

const router = express.Router();


router.route('/newest').get(async (req,res,next) => {
    try {
        const data = await fetchLatest()
        return res.status(200).send(data);
    } catch (error) {
        throw error;
    }
});


module.exports = router