import React from 'react';

function UserItem({ user, deleteUser }) {
  return (
    <li>
      <div>{user.name}</div>
      <div>{user.contact}</div>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
}

export default UserItem;