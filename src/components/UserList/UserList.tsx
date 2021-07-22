import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypedSelector";

import './UserList.css'

const UserList: React.FC = (props) => {
  const { users, error, loading } = useTypesSelector((state) => state.user);
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers();//заменяет стандартный dispatch
  }, [fetchUsers]);

  if (loading) {
    return (
      <div className="wrapper">  
        <div className="spin-wrapper">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={undefined}>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
