const express = require('express');
const md5 = require('md5');
const ph_config = require('./ph_config');
 
const app = express();
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/payhere/notify', (req, res) => {
    const merchant_id = req.body.merchant_id;
    const order_id = req.body.order_id;
    const payhere_amount = req.body.payhere_amount;
    const status_code = req.body.status_code;
    const md5sig = req.body.md5sig;

    console.log('PayHere Payment Notification');
    console.log('\tParams', JSON.stringify(req.body));

    res.send({
        status: {
            succes: true,
            description: "Successfully received Payment Notification"
        },
        data: req.body
    });
});

app.listen(8080, () => {
    console.log('Listening on port 8080...');
})