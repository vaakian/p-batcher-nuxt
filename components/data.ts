import { createPBatch } from "p-batcher";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todoItemApi = createPBatch((todoIds: number[]) => {
  const url = new URL("https://jsonplaceholder.typicode.com/todos");
  todoIds.forEach((id) => url.searchParams.append("id", id.toString()));

  return fetch(url).then((res) => res.json() as Promise<Todo[]>);
});
