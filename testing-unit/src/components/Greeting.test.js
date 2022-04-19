import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Grouping Test
describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />); // <Greeting /> is the component to be tested
    const helloWorldElement = screen.getByText('Hello World'); // get the element with the text 'Hello World'
    expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
  });

  test('renders paragraph. if the button was not clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText('Paragraph', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  // test('render change. if the button was clicked', () => {
  //   render(<Greeting />); 
  //   const buttonElement = screen.getByRole('button'); // get the button element
  //   userEvent.click(buttonElement); // click the button element
  //   const outputElement = screen.getByText('Changed', { exact: false }); // get the element with the text 'Changed'
  //   expect(outputElement).toBeInTheDocument();
  // });
});
 