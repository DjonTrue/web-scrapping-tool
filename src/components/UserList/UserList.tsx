import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../store/action-creators/user";

import './UserList.css'

const UserList: React.FC = (props) => {
  const { users, error, loading } = useTypesSelector((state) => state.user);
  //const { fetchUsers } = useActions()
  const dispatch = useDispatch()


  useEffect(() => {
    //fetchUsers();//example of using custom hook
    dispatch(fetchUsers())
  }, [dispatch]);

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
