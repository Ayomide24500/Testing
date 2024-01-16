const todos = [
  { id: 1, task: "Task 1", completed: false },
  { id: 2, task: "Task 2", completed: true },
  { id: 3, task: "Task 3", completed: false },
  { id: 4, task: "Task 4", completed: true },
  { id: 5, task: "Task 5", completed: false },
];

let newTodo = {
  id: todos.length + 1,
  task: "Task 6",
  completed: false,
};

export const createTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  newTodo: { id: number; task: string; completed: boolean }
): { id: number; task: string; completed: boolean } => {
  todoList.push(newTodo);

  return newTodo;
};

export const viewAlltodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>
): Array<{ id: number; task: string; completed: boolean }> => {
  return todoList;
};

export const viewOneTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): { id: number; task: string; completed: boolean } => {
  let getTodo = todoList.find((el: any) => {
    return el.id === id;
  })!;

  return getTodo;
};

export const updateOneTodo = (
  data: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): { id: number; task: string; completed: boolean } => {
  let getTodo = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getTodo;
};

export const deleteTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): boolean => {
  const initialLength = todoList.length;
  todoList = todoList.filter((todo) => todo.id !== id);
  return todoList.length !== initialLength;
};

const deleted = deleteTodo(todos, 3);
console.log(`Todo with ID 3 deleted: ${deleted}`);

createTodo(todos, newTodo);
