const express = require("express");
const dotenv = require("dotenv")
const User = require('../models/User'); 
const Customer = require('../models/Customer');

const fetchUser = require('../middlewares/fetchUser');

dotenv.config();

const router = express.Router();


router.post('/create-customer', async (req, res) => {
  try {
   // console.log(req.body)
    const {name,age,number,location} = req.body;

    console.log(req.body);

    let customer = await Customer.create({
      name,age,number,location
    })

    console.log(customer);
     
    // await customer.save();

    return res.status(200).json({ success: true, message  : "Customer saved"});
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
});

router.get('/get-customers', async (req, res) => {
  try {

    const customers = await Customer.find();
    
    res.status(200).json({ success: true, customers });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/create-multiple-customers', async (req, res) => {
  try {
    const { customers } = req.body;
    console.log(req.body.customers[0]);
    for (const customerData of customers) {
      const { name, age, number, location } = customerData;

      const customer = await Customer.create({
        name,
        age,
        number,
        location,
      });

    }
    console.log('customers created');
    return res.status(200).json({ success: true, message: "Customers saved" });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
