import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// Grrouping Test
// describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />); // <Greeting /> is the component to be tested
    const helloWorldElement = screen.getByText('Hello World'); // get the element with the text 'Hello World'
    expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
  });
  
// });

