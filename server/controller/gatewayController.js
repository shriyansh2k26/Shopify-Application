const orderModal=require('../modals/orderModal')
const dotenv=require('dotenv')
const braintree = require("braintree");
const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "qk87cyzq95x9x5vr",
    publicKey: "fd8hw7v7d7dsxfqz",
    privateKey: '879232ae28ebfb8e4eeaa716ea526ba4',
});
// token
const braintreeControllerToken = async (req, res) => {
    try {
        gateway.clientToken.generate({}, function (error, response) {
            if (error) {
                res.status(500).send(error)
            } else {
                res.send(response)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

//   payment

const braintreePayment = async (req, res) => {
    try {
        const { cart, nonce } = req.body
        let total = 0;
        cart.map(i => {
            total += i.price
        });
        let newTransaction = gateway.transaction.sale({
            amount: total,
            paymentMethodNonce: nonce,
            options: {
                submitForSettlement: true,
            }
        },
            function (error, result) {
                if (result) {
                     const order=new orderModal({
                        products:cart,
                        payment:result,
                        // buyer:req.user._id
                     }).save()
                     res.json({status:'ok'})
                }else{
                    res.status(500).send(error)
                }
            }
        )

    } catch (error) {
        console.log(error)
    }
}

module.exports= { braintreeControllerToken, braintreePayment };

