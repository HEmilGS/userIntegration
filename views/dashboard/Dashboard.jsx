import Card from "../dashboard/components/card";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Dashboard({ name }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-full bg-background">
      <div className="flex flex-row flex-wrap justify-center align-center">
        {users.map((user) => {
          if (name && !user.name.includes(name)) return null;
          return (
            <div key={user.id}>
              <Card user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
