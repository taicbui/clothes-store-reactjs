import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Style for navigation bar container
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;


// Style for logo container on the nav bar as a link
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;


// Style for nav links container
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


// Style for each nav Link. We import {Link} from 'react-router-dom' here so we won't have to do it again on the component
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;