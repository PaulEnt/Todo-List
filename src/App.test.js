import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Todo from './components/Todo';
import Form from './components/Form';

test('renders text element that has "Todo List"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 1 button', () => {
  render(<App />);
  let element = screen.getByRole("button")
  expect(element).toBeInTheDocument();
});

test("button displays submit message", () => {
  render(<Form />)
  const button = screen.getByText("Add Item")
  fireEvent.click(button) // mimics the clicking of the button
  const element = screen.getByRole("li")
  expect(element).toBeInTheDocument();
})
