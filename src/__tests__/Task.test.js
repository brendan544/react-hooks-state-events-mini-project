import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  const task = screen.getByText(/Buy rice/);
  const deleteButton = task.closest(".task").querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});