const express = require('express');
const ph = require('./ph_notify');

const app = express();
 
// Accept application/x-www-form-urlencoded Request Bodies.
app.use(express.urlencoded({ extended: true }));

// Accept application/json Request Bodies.
app.use(express.json());

// Handle PayHere Notify URL
app.post('/payhere/notify', (req, res) => {
    
    ph.process(req.body).then(msg => {
        res.status(200).send({
            status: {
                succes: true,
                description: "Successfully received Payment Notification"
            },
            data: {
                message: msg,
                request: req.body
            }
        });
    })
    .catch(error => {
        res.status(500).send({
            status: {
                succes: false,
                description: "An Error Occured"
            },
            data: {
                error: error,
                request: req.body
            }
        });
    });

});

// Create server and listen on port 8080...
app.listen(8080, () => {
    console.log('Listening on port 8080...');
})