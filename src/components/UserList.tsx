import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const {FetchUsers} = useActions()
  useEffect(() => {
    FetchUsers();
  }, []);
  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
