import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id}. {user.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
