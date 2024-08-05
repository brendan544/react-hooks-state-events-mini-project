import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test('displays all items when initially rendered', () => {
  const TASKS = [
    { text: 'Buy rice', category: 'Food' },
    { text: 'Save a tenner', category: 'Money' },
    { text: 'Build a todo app', category: 'Code' },
    { text: 'Build todo API', category: 'Code' },
    { text: 'Get an ISA', category: 'Money' },
    { text: 'Cook rice', category: 'Food' },
    { text: 'Tidy house', category: 'Misc' }
  ];

  const { container } = render(<TaskList tasks={TASKS} />);

  // Expect the correct number of tasks
  expect(container.querySelectorAll(".task").length).toBe(TASKS.length);
});
