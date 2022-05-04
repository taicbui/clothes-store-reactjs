import { FormInputLabel, Input, Group } from './form-input.styles';


// Parameters passed from sign-in and sign-up forms. '...otherProps' is rest parameter. 
// We destructure the param to separate label from other params
// Object destructuring is a kind of function which accepts params, therefore "...otherProps" is rest parameter, not spread operator. However, '...otherProps' is an object, unlike typical rest param which is array.
const FormInput = ({ label, ...otherProps }) => {        
  return (
    <Group>
      <Input {...otherProps} />          {/* '...' here is not rest but spread operator. Put otherProps here as <input> attributes  */}        
      {
          // Props passed to styled-component through variable 'shrink'. In the styled-component, 'schrink' will be params
          <FormInputLabel shrink={otherProps.value.length}>     
            {label}
          </FormInputLabel>
      }
    </Group>
  );
};

export default FormInput;