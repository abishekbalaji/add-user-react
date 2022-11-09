import Card from "../UI/Card/Card";
import UserItem from "./UserItem/UserItem";

const User = function ({ users }) {
  if (users.length === 0) {
    return <p>No users added!</p>;
  }
  return (
    <Card>
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} age={user.age} />
      ))}
    </Card>
  );
};

export default User;
