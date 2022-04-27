import styled from 'styled-components';


// Style for cart icon
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
  }
`;


// Style for number of the items selected on the cart icon
export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background: red;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  text-align: center;
  bottom: 1px;
  left: 1px;
`;