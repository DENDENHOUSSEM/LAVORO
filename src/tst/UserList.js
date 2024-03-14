import React, { useState, useEffect } from 'react';
import UserDetails from "./UserDetails";
import './UserList.css'; 


function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data.users);
        })
       ;
    }, []);

  return (
      <div className='list'>
        <h1>User List</h1>
        <table className="user-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>
                <div className="user-actions">
        <a href={`/UserDetails/${user.id}`} className="view-details">View Details</a>
      </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
   
      </div>

  );
}

export default UserList;
