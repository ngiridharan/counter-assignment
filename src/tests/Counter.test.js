// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const msg = screen.getByText("Counter");
  expect(msg).toBeInTheDocument(); 
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const isZero = screen.getByText(/0/i);
  expect(isZero).toBeInTheDocument();

  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText("+"));
  const isOne = screen.getByText("1");
  expect(isOne).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText("-"));
  const isNegOne = screen.getByText("-1");
  expect(isNegOne).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});
