const express = require('express');
const cors = require('cors');
const router = require('./routes');

function main(){
    const app = express();

    app.use(cors())

    app.get('/', async (req,res,next) => {
        try {
        
            let response = await fetch('https://lobste.rs/newest.json');
            return res.status(200).send(await response.json())
        } catch (error) {
            return res.status(400).send({
                message: "Service unavialable"
            })
        }

    });

    app.get('/recent', async (req,res,next) => {
        try {
        
            let response = await fetch('https://lobste.rs/hottest.json');
            return res.status(200).send(await response.json())
        } catch (error) {   
            return res.status(400).send({
                message: "Service unavialable"
            })
        }

    })

    // app.use(router)


    app.use((err,req,res,next) => {
        res.status(404).send({
            message: "Service Unavailable"
        })
    })

    app.listen(3002);
}


main();