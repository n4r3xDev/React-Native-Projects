export type TodoPriority = "Low" | "Normal" | "High";
export type TodoPriorityColor = "lightgreen" | "green" | "red";
export interface Todo {
  id?: number;
  title: string;
  priority: TodoPriority;
  completed: boolean;
  timestamp?: number;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Buy groceries',
    priority: "Normal",
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 2,
    title: 'Clean the house',
    priority: "Low",
    completed: true,
    timestamp: 1715000000000,
  },
  {
    id: 3,
    title: 'Finish project report',
    priority: "High",
    completed: false,
  },
  {
    id: 4,
    title: 'Call the doctor',
    priority: "High",
    completed: true,
    timestamp: 1715100000000,
  },
];