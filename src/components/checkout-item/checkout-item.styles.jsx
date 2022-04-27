import styled from 'styled-components';



// Style for the parent container
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;


// Style for the image container
export const ImageContainer = styled.div`
  width: 22%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;


// Style for span of each collumn
export const BaseSpan = styled.span`
  width: 23%;
`;


// Style for quantity
export const Quantity = styled(BaseSpan)`
  display: flex;
`;


// Style for arrow increase/decrease
export const Arrow = styled.div`
  cursor: pointer;
`;


// Style for quantity number
export const Value = styled.span`
  margin: 0 10px;
`;


// Style for remove button
export const RemoveButton = styled.div`
  padding-left: 1px;
  cursor: pointer;
`;