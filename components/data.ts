import { createPBatch } from "p-batcher";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Automatically fetches a list of todos from the JSONPlaceholder API.
 * All requests are batched together and only one request is made.
 *
 *
 * @param todoIds The IDs of the todos to fetch.
 *
 * @returns A function that accepts one `todoId` and returns a `Promise` that resolves to a `Todo`.
 */
export const todoItemApi = createPBatch((todoIds: number[]) => {
  return $fetch<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
    params: {
      id: todoIds,
    },
  });
});
