// This file contains serverless backend code, connecting the UI with Stripe Server
// This file will get served by Netlify on build
// We need to add 'dotenv' dependency again even though it's already included in create-react-app because serverless functions do not run on create-react-app but on a brand new node environment
// We need to write code in ES5

require('dotenv').config();       // attach dotenv to our process environment

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);    // instantiate stripe on the backend with the secret key


// handler recieve event from payment handler on payment-form component and then make a payment intent which will be read by Stripe
exports.handler = async (event) => {
  try {

    const { amount } = JSON.parse(event.body); // convert json string to integer

    const paymentIntent = await stripe.paymentIntents.create({            // await 'till this request to the server is done
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),          // convert the paymentIntent from object to json to be recieved when we fetch from the payment-form component
    };
  } 
  
catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),                 // return error if an error is catched
    };
  }
};