const express = require('express');
const cors = require('cors');
const router = require('./routes');

function main(){
    const app = express();

    app.use(cors())

    // app.get('/', async (req,res,next) => {
    //     let response = await fetch('https://lobste.rs/hottest.json');
    //     return res.status(200).send(await response.json())
    // })

    app.use(router)


    app.use((err,req,res,next) => {
        res.status(404).send({
            message: "Service Unavailable"
        })
    })

    app.listen(3002);
}


main();