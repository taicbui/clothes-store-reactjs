import styled from 'styled-components';

// Import Button styles
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';



// Style for cart dropdown container
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 55px;
  right: 42px;
  z-index: 5;


  // Below means whatever type of button it is, set margin-top auto.
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;


// Style for message "Your cart is empty" on cart dropdown
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;


// Style for cart item on cart dropdown
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;