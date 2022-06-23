import { useState } from 'react';
import { useSelector } from 'react-redux';

// Import stripe dependency
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Selectors to access cart and user states from Redux store
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

// Styled-components
import { PaymentButton, PaymentFormContainer, FormContainer } from './payment-form.styles';

// Button component
import { BUTTON_TYPE_CLASSES } from '../button/button.component';



// Our payment-form component
const PaymentForm = () => {

  // instantiate stripe and stripe's element
  const stripe = useStripe();
  const elements = useElements();

  // Get cart total and current user state form Redux store
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  // This state is to determine whether the payment is be processed. This is needed for isLoading prop 
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);


  /* Payment handler function to send credit card info with POST request to the server */
  const paymentHandler = async (e) => {
    e.preventDefault();

    // only proceed the function when both stripe and elements are present
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true); // Starting to send POST request with the monetary amount the server 

    // Function to send POST request with cart amount to payment intent to return a response as a promise.
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    })

    .then((res) => {
      return res.json();       // return an object as a promise 
    });

    const clientSecret = response.paymentIntent.client_secret;         // client_secret lets stripe know if a payment connects with an intent

    // Make the actual payment and get the payment result (fail or succeed?)
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {

      payment_method: {
        card: elements.getElement(CardElement),           // Get instance of the CardElement along with card info input by users
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Anonymous', // If user logged in, use the user's displayName as billing details, otherwise, use 'anonymous'
        },
      },
      
    });

    setIsProcessingPayment(false);      // Payment is all done, set the state back to false


    // Alert errors
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>

        <CardElement />

        <PaymentButton
          // buttonType prop will determines the types of button displayed
          buttonType={BUTTON_TYPE_CLASSES.inverted}

          // if isLoading is true, the button is disabled
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>

      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;