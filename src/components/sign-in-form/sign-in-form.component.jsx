import { useState } from 'react';
import { useDispatch } from 'react-redux';

// form input and button component
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// Styled-component
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

// Action to sign in with email and with google
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';


// default field
const defaultFormFields = {
  email: '',
  password: '',
};


 // Our sign-in component
const SignInForm = () => {
  const dispatch = useDispatch();

  // formFields states are used to monitor user input and dispatch those input 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // function to reset formFields to its default value
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // function to sign in with Google
  // Redux saga will listen to this dispatch
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };


  // function to sign in with email and password
  // Redux saga will listen to this dispatch
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();

    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // [name]: value is Computed property names and dynamic object property names
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