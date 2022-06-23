// Import Button styled component
import {  
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';                    



// Other components will import these to determine what kind of buttons they need.
export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};



// Get whatever button when we pass its type to this function as param
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);



// This is what other components, that need buttons such as sign-in, will import this. This function will return the needed button
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  if (isLoading){ return <CustomButton {...otherProps} disabled>{children}</CustomButton>; }
  else {return <CustomButton {...otherProps}>{children}</CustomButton>;}

};

export default Button;