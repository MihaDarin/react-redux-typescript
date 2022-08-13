import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FetchTodos } from "../store/action-creators/todo";
export const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { FetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    FetchTodos(page, limit);
  }, [page]);
  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div style={{ display: "flex" }}>
        {pages.map((p) => {
          return (
            <div
              key={p}
              style={{
                border: p === page ? "2px solid blue" : "1px solid grey",
                padding: "10px",
              }}
              onClick={() => setTodoPage(p)}
            >
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
};
