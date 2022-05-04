import styled from 'styled-components';

// Style for checkout page


// Style for the parent container
export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;


// Style for headers
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

// Style for block of each header
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;


// Style for the 'total' amount
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;