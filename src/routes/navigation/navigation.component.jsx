import { Fragment, useContext, useRef, useEffect, useState } from 'react';

//We can use React Router Outlet to change the content of a page while keeping the navbar.
//The Outlet will indicate where we want to display our child route
import { Outlet} from 'react-router-dom';

// Import CartIcon and CartDropDown component
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// UserContext will contains all states about users. CartContext will contain all states about cart
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

// Import logo and use it as a React component
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// Import firebase sign-out component from firebase.utils file
import { signOutUser } from '../../utils/firebase/firebase.utils';

// Import styled-component for nav bar
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';




// Nav bar component
const Navigation = () => {

  // Get states for user and cart
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // Create states for mousedown event listener. We will use these states to keep track of all the clicks that users make
  const [clickState, setClickState] = useState(true)

  // Get ref for cart icon and cart dropdown container
  const cartIconRef = useRef();
  const cartDropDownRef = useRef();


  // This useEffect() will fire according to changes in 'clickState'. If we don't use 'clickState' as dependency, this will only fire on mount 
  useEffect( () => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (cartIconRef.current.contains(e.target)) {
        setIsCartOpen(!isCartOpen)
      } else if (cartDropDownRef.current.contains(e.target)) {
        setIsCartOpen(true)
        console.log('dropdown click')
      } else { setIsCartOpen(false) }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [clickState]);



  // For every click user makes, we changes the clickState
  useEffect(() => {
    const changeClickState = () => {
      setClickState(!clickState)
    }
    document.addEventListener("mousedown", changeClickState)

    return () => {
      document.removeEventListener("mousedown", changeClickState)
    }
  },[clickState]);




  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <div ref={cartIconRef}>
          <CartIcon/>
          </div>
          <div ref={cartDropDownRef}>
          {isCartOpen && <CartDropdown/>}
          </div>
        </NavLinks>
      </NavigationContainer>

      {/* We put this Outlet where we want to display the child route. Home is the child route of nav bar*/}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;