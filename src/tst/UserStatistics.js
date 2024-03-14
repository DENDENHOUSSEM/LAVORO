
import React, { useState, useEffect } from 'react';
import './UserStatistics.css';

function UserStatistics() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
      })
     ;
  }, []);


  if (!users.length) {
    return <div>Loading...</div>;
  }

  const totalUsers = users.length;
  const maleUsers = users.filter(user => user.gender === 'male').length;
  const femaleUsers = users.filter(user => user.gender === 'female').length;
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  const averageAge = totalAge / totalUsers;

  return (
    <div className="user-statistics">
      <h2>User Statistics</h2>
      <ul>
        <li>Total Users: {totalUsers}</li>
        <li>Male Users: {maleUsers}</li>
        <li>Female Users: {femaleUsers}</li>
        <li>Average Age: {averageAge.toFixed(2)}</li>
      </ul>
    </div>
  );
};


export default UserStatistics;
