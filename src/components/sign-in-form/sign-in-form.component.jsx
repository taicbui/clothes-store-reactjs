import { useState } from 'react';

// Import Input form
import FormInput from '../form-input/form-input.component';

// Import button
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


// Import Firebase sign-in
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

// Import styled-component
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

// This object will be assigned as default value for formFields state
const defaultFormFields = {
  email: '',
  password: '',
};


// SignInForm will be imported and included by Authentication component
const SignInForm = () => {

  // Setup for formFields state
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };


  // Sign in with Google function
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };




  // Action to take when we submit sign-in with email & password form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };


  // Action to take when we type in sign-in input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;