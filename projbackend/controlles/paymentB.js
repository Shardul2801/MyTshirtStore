const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "d7b592vhpk9dtzmd",
  publicKey: "9jnzyhf2sj9twqfp",
  privateKey: "3e0bcc54118002d71381fe25d11aae30"
});


exports.getToken =(req, res) => {
    gateway.clientToken.generate({} ,function (err, response)  {
     if(err){
         res.status(500).send(err)
     }
     else {
         res.send(response)
     }
      });
}

exports.processPayment=(req,res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce

  let amountFromTheClient = req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
        if(err) {
          res.status(500).send(err)
        }else{
          res.json(result);
        }
      });
}