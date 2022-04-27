import styled from 'styled-components';

import { Link } from 'react-router-dom';


// Style for category preview parent container
export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

// Style for the title, which inherits 'Link'. So the category-preview.component won't have to import {Link} again
export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  margin-left: 10px;
  cursor: pointer;
`;


// Style for category preview part
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;