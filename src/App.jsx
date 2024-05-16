import React, { useState } from 'react';
import Form from './components/Form';
import UserList from './components/UserList';

const App = () => {
  const [users, setusers] = useState([]);
  
  const addUser = (user) => {
    setusers([...users, user]);
  };
  const deleteUser = (id) => {
    setusers(users.filter(user => user.id !== id));
  }
  return (
    <div>
      <Form addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser}></UserList>
    </div>
  );
}

export default App;
