import styled, { css } from 'styled-components'; // import css to encapsulate some css inside a block that we can use as variables and inject into different components

// Variables (JS variables instead of SASS variables)
const subColor = 'grey';
const mainColor = 'black';


// CSS to be injected into components
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;


/* Style for input label */
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  // an arrow function with AND operator. It will return the first falsy value or the last one if all of the values are true. This means this function will return shrinkLabelStyles if schrink is             ;
  // 'schrink' is the props passed from form-input.component. We need to destructure props because it's passed as an object ;
  ${({shrink}) => shrink && shrinkLabelStyles};  

`;


/* Style for input field */
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  // https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator
  // When we focus, we want to find the nearest subsequent sibling of the 'FormInputLabel'. Anh we will put 'shrinkLabelStyles' in that 'FromInputLabel'. 
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;


/* Style for the parent div of each form */
export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;