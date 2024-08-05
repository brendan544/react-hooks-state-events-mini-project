import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

test('calls onTaskFormSubmit with correct arguments when form is submitted', () => {
  const onTaskFormSubmit = jest.fn();
  const categories = ['Code', 'Design', 'Test'];

  render(<NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Details/), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByLabelText(/Category/), { target: { value: 'Code' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Add task/));

  // Check that the callback was called with the expected arguments
  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: 'Pass the tests',
      category: 'Code'
    })
  );
});