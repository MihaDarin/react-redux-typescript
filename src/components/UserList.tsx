import React, { FC } from "react";
import { useSelector } from "react-redux";

export const UserList: FC = () => {
  const state = useSelector((state) => state);
  return <div>UserList</div>;
};
