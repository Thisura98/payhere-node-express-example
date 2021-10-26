const md5 = require('md5');
const ph_config = require('./ph_config');

/**
 * This method evalutes the Express JS Body.
 * 
 * If the MD5 Verification passed, the promise is resolved.
 * If it failed, the promise is rejected.
 * 
 * Why use Promises? We can easily determine if the process succeded or not
 * from the Express JS handling code.
 * 
 * @param {any} body 
 * @returns {Promise<string>}
 */
module.exports.process = function(body){
    return new Promise((resolve, reject) => {

        // Extract Data from Request Body
        const merchant_id = String(body.merchant_id);
        const order_id = String(body.order_id);
        const payhere_amount = String(body.payhere_amount);
        const payhere_currency = String(body.payhere_currency);
        const status_code = String(body.status_code);
        const md5sig = String(body.md5sig);

        console.log('PayHere Payment Notification');
        console.log('Param:', JSON.stringify(body, null, 2));

        // Calculate MD5 in Steps
        const secret_md5 = md5(ph_config.merchant_secret).toUpperCase();
        const pre_local_components = [
            merchant_id, 
            order_id,
            payhere_amount,
            payhere_currency,
            status_code,
            secret_md5
        ];
        const pre_local_md5 = pre_local_components.join('');
        const local_md5 = md5(pre_local_md5).toUpperCase();

        console.log('Pre Hash Comps:', pre_local_components);
        console.log('Pre Hash:', pre_local_md5);
        console.log('Local Hash:', local_md5);

        // Verify MD5
        if (md5sig == local_md5){
            if (status_code == 2){
                // TODO: Update Database, Send Success Emails, etc.
                resolve('Payment was Verified and Successful!');
            }
            else{
                // TODO: Update Database, Send Failed Emails, etc.
                resolve('Payment was Verified but Failed with status code (' + status_code + ')');
            }
        }
        else{
            reject('MD5 did not match')
        }
    });
}