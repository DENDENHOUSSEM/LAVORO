// UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
  }, [userId]);

  console.log(user)

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      
        <div className="user-details-table">
          <table>
            <tbody>
              <tr>
                <td><img src={user.image} alt="User" /></td>
                <td>
                  <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                  <p><strong>Age:</strong> {user.age}</p>
                  <p><strong>Gender:</strong> {user.gender}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    

    </div>
  );
};

export default UserDetails;
