# PayHere Node + Express.JS Example

Demonstrates how accept the PayHere Payment Notification using Node JS and Express.

### Requirements

1. [Node JS](https://nodejs.org/en/)
2. NPM (installed with Node)
3. [Postman](https://www.postman.com/)

### How to run?

#### The Server

Run these commands in your Terminal / Command Prompt.

1. `git clone https://github.com/Thisura98/payhere-node-express-example.git`
2. `cd payhere-node-express-example`
3. `nodemon index.js` or `npx nodemon index.js`

> To quit nodemon, press Ctrl+C. 

#### Testing the Server

1. Open the `postman.collection.json` file in this Repository.
2. Copy all of its contents. (First, Ctrl + A then Ctrl + C).
3. Open Postman.
4. Click the "Import" button (Top Left).
5. Next, click the "Raw Text" tab.
6. Paste the text copied in Step 2 into the text box.
7. Click Continue, and then Import.
8. A new collection named "PayHere Node Example" will be created.
9. Expand it from the Sidebar.
10. Select one of the available Requests and press "Send" to test.

### How do I use this?

- index.js: When a request arrives at the '/payhere/notify' endpoint, the `process()` method in `ph_notify.js` is called.

- ph_notify.js: Logic to verify the Payment Request using MD5 checksums is here. You can use this file as is, and add your necessary business logic to complete your integration (See the points marked 'TODO').

- ph_config.js: This is where your Merchant ID and Merchant Secret are stored. Replace these values with your own Merchant ID and Merchant Secret.

If you don't already have a Merchant Account, you can create a free Sandbox Account from the following link.

- [https://sandbox.payhere.lk/](https://sandbox.payhere.lk/)