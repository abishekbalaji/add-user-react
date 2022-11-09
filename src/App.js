import "./App.css";
import User from "./Components/User/User";
import NewUser from "./Components/NewUser/NewUser";
import { useState } from "react";

function App() {
  const usersArray = [
    { id: "u0", name: "Aegon", age: 100 },
    { id: "u1", name: "Rhaenys", age: 99 },
    { id: "u2", name: "Visenya", age: 101 },
  ];

  const [users, setUsers] = useState(usersArray);

  const addNewUser = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div className="App">
      <NewUser addNewUser={addNewUser} users={users} />
      <User users={users} />
    </div>
  );
}

export default App;
