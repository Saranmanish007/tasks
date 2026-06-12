import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api"

function Users() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    api
    .get("/users")

    .then((response) => {setUsers(response.data)})

    .catch((error) => console.log(error))

  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>Name : {user.name}</h3>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;



