import { useState, useEffect } from "react";
import Header from "../../components/Header";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = fetch("/api/users");
    response.then(async(result) => {
      const userResult = result
      const data = await userResult.json();
      setUsers(data);
    })
    
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <h1>banner cambo box</h1>
        </div>
        <div className="container">
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <div className="container">
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
}
