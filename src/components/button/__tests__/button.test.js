import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button/>);           // Create an virtual DOM, which can later be accessed by screen global    
    expect(screen.getByRole('button')).toHaveStyle('background-color: black');   // If an element has a role of button, it should have background color black.
    expect(screen.getByRole('button')).not.toBeDisabled();                       // should not have attribute 'disabled'
  });


  test('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });


  test('should render google button when passed google type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}/>);
    expect(screen.getByRole('button')).toHaveStyle('background-color: #4285f4');
  });

  test('should render inverted button when passed inverted type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: white');
  });
});